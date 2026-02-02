---
title: Svelte 시작하기 - 간결하고 강력한 웹 프레임워크
date: 2026-02-02
description: Svelte는 가상 DOM을 사용하지 않는 컴파일러 기반의 프레임워크입니다. 이 글에서는 Svelte의 핵심 철학과 기본적인 문법을 소개합니다.
category: Tutorial
image: https://images.unsplash.com/photo-1596277353986-9a5c884c7426?q=80&w=1000&auto=format&fit=crop
---

## Svelte란 무엇인가요?

Svelte(스벨트)는 React나 Vue와 같은 최신 웹 프레임워크입니다. 하지만 중요한 차이점이 있습니다. React나 Vue는 브라우저에서 실행되는 라이브러리인 반면, Svelte는 빌드 타임에 실행되는 **컴파일러**라는 점입니다.

### 핵심 특징

1.  **가상 DOM 없음 (No Virtual DOM)**: Svelte는 런타임에 DOM의 상태를 비교하는 대신, 컴파일 단계에서 상태 변경이 일어날 때 DOM을 어떻게 업데이트해야 하는지 구체적인 코드를 생성합니다. 덕분에 매우 빠르고 메모리 효율이 좋습니다.
2.  **적은 코드량 (Write Less Code)**: Svelte는 개발자의 생산성을 최우선으로 고려합니다. 보일러플레이트 코드를 획기적으로 줄여주어, 더 적은 코드로 더 많은 기능을 구현할 수 있습니다.
3.  **진정한 반응성 (Truly Reactive)**: 간단한 할당(`=`)만으로 상태를 업데이트할 수 있습니다. 복잡한 상태 관리 라이브러리나 훅(Hook) 없이도 직관적인 반응형 프로그래밍이 가능합니다.

## Svelte 5와 Runes

최근 Svelte 5에서는 **Runes**라는 새로운 반응성 시스템이 도입되었습니다. 이는 컴포넌트 내부뿐만 아니라 `.ts`나 `.js` 파일 어디에서나 반응형 상태를 정의하고 사용할 수 있게 해줍니다.

### 기본 문법 예시

Svelte 5의 `$state` 룬을 사용한 간단한 카운터 예제입니다:

```svelte
<script>
    let count = $state(0);

    function increment() {
        count += 1;
    }
</script>

<button onclick={increment}>
    클릭 횟수: {count}
</button>
```

보시다시피, `useState`나 `ref` 같은 래퍼(wrapper) 없이 일반 변수처럼 값을 할당하는 것만으로 화면이 업데이트됩니다.

## 결론

Svelte는 웹 개발의 복잡함을 덜어내고, 본질적인 기능 구현에 집중할 수 있게 해주는 훌륭한 도구입니다. 가볍고 빠르며 배우기 쉬운 프레임워크를 찾고 있다면, 지금 바로 Svelte를 시작해보세요!
