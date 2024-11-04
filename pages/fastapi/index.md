---
layout: default
title: fastapi
has_children: true 
---
# FastAPI
{: .fs-9 }

`Web Framework` `Python 3.8+` `MIT License`

직관적, 간결함, 배우기 쉬움, 높은 코드 생산성, 운영 환경 구성이 쉬움
{: .fs-5 .fw-300 }

---
- Documentation: https://fastapi.tiangolo.com/
- GitHub: https://github.com/fastapi/fastapi
{: .fs-3 .fw-600 }
---

Python 프레임워크 중에서도 높은 성능을 자랑하며, 빠른 코드 작성과 쉽게 배울 수 있다는 장점이 있습니다. 또한, 손쉽게 프로덕션에 배포할 수 있어 많은 주목을 받고 있습니다. FastAPI가 인기를 얻는 주요 이유를 세부적으로 살펴보면 다음과 같습니다:

## Python Type Hint
FastAPI는 Python의 타입 힌트를 적극 활용하여 입력 데이터의 유효성을 자동으로 검사하고, 직렬화와 역직렬화를 처리해 줍니다. 덕분에 코드가 더 간결하고 직관적이어서 생산성이 높아집니다.

## OpenAPI 문서 자동 생성 
API 엔드포인트를 정의하는 것만으로도 OpenAPI 표준에 맞는 문서를 자동으로 생성합니다. 이 문서는 API 설명과 공유가 용이해, 프런트엔드 개발자나 다른 팀원들과 협업 시 유용하게 사용할 수 있습니다.

## 비동기 처리 지원 
ASGI(Application Server Gateway Interface) 서버 기반으로 만들어진 FastAPI는 비동기 코드를 지원합니다. 이를 통해 여러 작업을 동시에 처리할 수 있어 성능이 크게 향상됩니다.

## 쉬운 운영 환경 구성
Gunicorn과 Uvicorn을 함께 사용하는 방식은 고성능과 안정성을 동시에 추구하는 애플리케이션 배포에 최적화되어 있습니다. 이는 대규모 웹 서비스의 병목 현상을 줄이고, 다양한 유형의 트래픽에 견딜 수 있는 배포 환경을 만들어 줍니다.
