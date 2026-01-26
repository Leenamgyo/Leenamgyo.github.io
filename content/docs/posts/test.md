---
title: "Test Page"
description: "Hugo 마크다운 렌더링과 스타일을 확인하기 위한 테스트 페이지"
date: 2026-01-26
draft: false
tags: ["test", "hugo"]
---
## 이 페이지는 무엇인가요?
이 페이지[[static/images/test/fb2e856e3040322227339337d9c4f4a7_MD5.jpg|Open: 스크린샷 2025-06-29 오후 7.49.30.png]]
![[static/images/test/fb2e856e3040322227339337d9c4f4a7_MD5.jpg]]는 **Hugo 블로그 설정 및 테마 적용 상태를 확인하기 위한 테스트 문서**입니다.  
마크다운, 코드 블록, 인용문, 리스트 등이 정상적으로 표시되는지 확인합니다.
[[static/images/test/fb2e856e3040322227339337d9c4f4a7_MD5.jpg|Open: 스크린샷 2025-06-29 오후 7.49.30.png]]
![[static/images/test/fb2e856e3040322227339337d9c4f4a7_MD5.jpg]]
---

## 기본 텍스트
일반 문단입니다.  
**굵은 글씨**, *기울임*, `인라인 코드`가 잘 보이는지 확인합니다.

---

## 리스트
### 순서 없는 리스트
- Backend
- Data
- Search
- API

### 순서 있는 리스트
1. Hugo 설정
2. 테마 적용
3. 콘텐츠 작성
4. 배포

---

## 코드 블록
### Python
```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/health")
def health():
    return {"status": "ok"}
