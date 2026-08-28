# AGENTS.md

SvelteKit 기반 정적 블로그. 에이전트는 작업 시작 전에 이 파일과 작업 범위에 해당하는 `docs/agent-context/` 문서를 읽는다.

## 작업 컨텍스트

- 프로젝트 구조나 기술 스택을 다룰 때: `docs/agent-context/project.md`
- 코드 및 콘텐츠 작성 규칙이 필요할 때: `docs/agent-context/conventions.md`
- 변경 사항을 검증할 때: `docs/agent-context/verification.md`

컨텍스트가 바뀌면 이 파일에 세부 내용을 중복해서 추가하지 말고 해당 컨텍스트 파일을 갱신한다. 새로운 독립 주제는 `docs/agent-context/<topic>.md`로 분리하고 위 목록에 연결한다.

## Git 및 PR 플로우

모든 변경 작업은 다음 순서로 완료한다.

1. 시작 전 `git status --short --branch`로 현재 브랜치와 기존 변경을 확인한다.
2. 기존 사용자 변경을 보존한 상태에서 `main`을 기준으로 `feat/<task-slug>` 브랜치를 만든다. 이미 해당 작업 브랜치라면 새로 만들지 않는다.
3. 요청 범위만 수정하며 관련 없는 변경은 스테이징, 되돌리기 또는 리포맷하지 않는다.
4. `docs/agent-context/verification.md`의 검증 루프를 통과한다.
5. `git diff`와 `git status`로 최종 변경 범위를 검토한다.
6. 이번 작업에서 직접 변경한 파일만 스테이징하고 Conventional Commits 형식으로 커밋한다. 기능은 `feat:`, 수정은 `fix:`, 문서만 변경하면 `docs:`를 사용한다.
7. 브랜치를 `origin`에 push하고 `main` 대상 PR을 생성한다. PR 본문에는 변경 요약과 실행한 검증을 기록한다.
8. 완료 보고에 브랜치명, 커밋, PR 링크, 검증 결과를 포함한다.

push나 PR 생성이 인증, 네트워크 또는 권한 문제로 실패하면 로컬 커밋까지 마친 뒤 실패한 명령과 필요한 후속 조치를 보고한다.
