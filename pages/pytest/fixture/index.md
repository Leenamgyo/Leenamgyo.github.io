---
layout: default
title: fixtures
parent: pytest
nav_order: 1
---

# pytest.fixtures

{: .note-title }
pytest fixtures are designed to be explicit, modular and scalable.


```python

```


## Fast API 의존성 코드 테스트
```python
    from typing import Annotated, Union

    from fastapi import Depends, FastAPI, HTTPException, Query
    from sqlmodel import Field, Session, SQLModel, create_engine, select

    from src.config import settings

    engine = create_engine(url=settings.get_database_url())
    SQLModel.metadata.create_all(engine)

    def get_session():
        with Session(engine) as session:
            yield session

    SessionDep = Annotated[Session, Depends(get_session)]

```





