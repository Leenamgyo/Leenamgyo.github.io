---
layout: default
title: CORS
parent: web security
nav_order: 1
---

# CORS 
**CORS (Cross-Origin Resource Sharing)**는 웹 애플리케이션이 다른 출처(`domain`, `protocol`, `port`)에서 리소스에 접근할 수 있도록 허용하는 메커니즘입니다. `CORS`는 웹 보안의 중요한 부분으로, 브라우저가 기본적으로 적용하는 `Same-Origin Policy(SOP)`의 제한을 극복하기 위해 개발되었습니다.


## 브라우저의 `SOP(Same-Origin Policy)` 정책
브라우저가 `SOP` 정책으로 인해 접근을 차단하는 경우가 있습니다. 예를 들어 다음과 같습니다:
```
Access to fetch at ‘https://example.com’ from origin ‘http://localhost:3000’ has been blocked 
by CORS policy: No ‘Access-Control-Allow-Origin’ header is present on the requested resource. 
If an opaque response serves your needs, set the request’s mode to ‘no-cors’ to fetch 
the resource with CORS disabled.
```

`SOP`는 어떤 출처에서 불러온 `DOM`이나 `script`가 다른 출처에서 가져온 리소스와 상호 작용할 수 있는 방법을 제한하는 중요한 보안 메커니즘입니다. 이 정책은 한 페이지의 악성 스크립트가 해당 페이지의 `DOM`을 통해 다른 웹 페이지의 민감한 데이터에 접근하는 것을 방지합니다. 악의적 접근에 대한 예로 `XSS`, `CSRF` 공격 등이 있습니다.

## 출처(`origin`)의 정의 
`CORS`와 `SOP`의 특징은 출처(`origin`)에 대한 보안입니다. 그렇다면 이 출처(`origin`)는 무엇이고 어떻게 보안을 진행할까요?


## CORS 동작
`CORS`가 등록된 서버와 `SOP`가 설정된 브라우저 간 통신



## 참조 
- https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy
- https://developer.mozilla.org/ko/docs/Web/Security/Same-origin_policy
- https://en.wikipedia.org/wiki/Same-origin_policy
- https://velog.io/@wogkr1383/SOP%EC%99%80-CORS








