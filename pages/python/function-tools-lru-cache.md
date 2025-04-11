---
layout: default
title: functools.lru_cache 사용법
parent: Python
nav_order: 10
---

# functools.lru_cache 사용법
{: .fw-700 }

## 소개
lru_cache는 Python의 표준 라이브러리인 `functools` 모듈에서 제공하는 데코레이터로, 함수의 실행 결과를 메모리에 저장(caching)하여 동일한 인자가 들어오는 경우 재계산 없이 빠르게 결과를 반환할 수 있게 해줍니다. 

이 데코레이터는 최근 사용된 결과를 우선적으로 유지하는 LRU(Least Recently Used) 알고리즘을 기반으로 동작하며, `maxsize` 파라미터를 통해 캐시 크기를 조절할 수 있습니다. 이를 통해 I/O 비용이 크거나 연산이 복잡한 함수의 성능을 효과적으로 개선할 수 있습니다.

다만, 모든 인자가 해시 가능(hashable)해야 하고, 메모리 사용량이 증가할 수 있으며, 객체 수명 관리에 주의가 필요합니다. 또한 프로세스 내에서만 캐시가 유지되므로 분산 환경에서는 제한적입니다.



### 파라미터
```python
from functools import lru_cache

# 기본값 (maxsize=128, typed=False)
@lru_cache(maxsize=128, typed=False)
def expensive_function(x):
    ...
```

- maxsize: 캐시에 저장할 최대 항목 수를 지정합니다.
    - 숫자 값: 지정된 크기만큼 저장, 오래된 항목은 자동 제거 (LRU 방식)
    - `None`: 무제한 캐시
- typed: 기본값은 `False`. `True`로 설정 시 인자의 타입까지 구분하여 캐시합니다.
    - `False`: `f(3)`와 `f(3.0)`을 동일하게 취급
    - `True`: `f(3)`와 `f(3.0)`을 별도로 캐시


### 캐시 정보 및 관리
lru_cache는 캐시의 성능과 상태를 모니터링하고 관리할 수 있는 메서드를 제공합니다
```python
@lru_cache(maxsize=4)
def compute(x):
    print(f"Computing {x}")
    return x * x

# 함수 호출
compute(2)  # 캐시되지 않음, 결과 계산
compute(3)  # 캐시되지 않음, 결과 계산
compute(2)  # 캐시됨, 결과 반환

print(compute.cache_info())  *# CacheInfo(hits=1, misses=2, maxsize=4, currsize=2)*`
```

- `cache_info()`: 캐시 사용 정보를 반환합니다. 반환값은 hits(캐시 적중 횟수), misses(캐시 미스 횟수), maxsize, currsize(현재 캐시 크기) 정보를 포함합니다
- `cache_clear()`: 캐시를 비웁니다



## 한계
lru_cache는 강력한 캐싱 도구지만 몇 가지 한계가 있습니다. 

### **해시 가능한 인자 제약**
lru_cache는 함수 인자를 캐시 키로 사용하므로, 모든 인자는 해시 가능(hashable)해야 합니다. 따라서 리스트나 딕셔너리와 같은 변경 가능한(mutable) 객체는 직접 인자로 사용할 수 없습니다

### **메모리 사용량**
lru_cache는 함수 호출 결과를 메모리에 저장하므로, 캐시 크기가 크거나 반환 값이 큰 경우 메모리 사용량이 증가할 수 있습니다. 현재는 메모리 크기 기반으로 캐시를 제한하는 기능은 기본적으로 제공되지 않습니다

### **객체 수명 관리 문제**
lru_cache는 함수 인자에 대한 참조를 유지하므로, 객체가 더 이상 필요하지 않더라도 캐시에 남아있는 한 메모리에서 해제되지 않습니다. 이는 특히 메서드를 캐싱할 때 문제가 될 수 있는데, self 인스턴스가 캐시에 포함되어 객체가 필요 이상으로 오래 메모리에 남게 됩니다.

```python
class MyClass:
    @lru_cache(maxsize=128)
    def expensive_method(self, x):
        # 비용이 많이 드는 계산
        return x * x
```

이 경우 MyClass의 인스턴스는 캐시에서 제거되거나 캐시가 지워질 때까지 메모리에 남아있게 됩니다

### **멀티 프로세스/서버 환경 미지원**
캐시는 프로세스 내에서만 유지되기 때문에, 여러 프로세스나 서버 간에 캐시가 공유되지 않습니다. 분산 환경에서는 별도의 캐시 시스템(Redis 등)이 필요합니다.


## 스코프
lru_cache의 maxsize는 전역(global) 이 아닙니다. 즉, @lru_cache(maxsize=...)를 사용하면 그 데코레이터가 적용된 함수에만 캐시 설정이 적용됩니다. 각각의 함수는 자기만의 캐시 공간을 가지게 되며, 서로 영향을 주지 않습니다.

```python
from functools import lru_cache

@lru_cache(maxsize=10)
def fib(n):
    print(f"Calculating fib({n})")
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

@lru_cache(maxsize=2)
def square(n):
    print(f"Calculating square({n})")
    return n * n
```
위 코드에서 fib 함수는 최대 10개의 결과를 캐싱하고, square는 최대 2개의 결과만 캐싱합니다. 각각 독립적으로 관리됩니다.
