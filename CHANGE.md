# Change Log

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

- 에이전트 작업을 위한 feat 브랜치, 검증, 커밋, push 및 PR 생성 플로우를 정의합니다.
- 프로젝트 구조, 작성 규칙과 검증 컨텍스트를 독립 문서로 관리합니다.
- 작업별 변경 사항을 `CHANGE.md`에 일관된 형식으로 기록하는 규칙을 추가합니다.
- 행과 열을 동적으로 추가하거나 삭제하는 테이블 예제 게시글을 추가합니다.
- 저장소별 Codex 승인 정책과 Git/GitHub CLI 허용 규칙을 프로젝트 내부에서 관리합니다.
- UUID 파일명을 사용하는 새 게시글 초안과 버전별 게시글 템플릿을 추가합니다.

### Changed

- 새로운 독립 작업 요청마다 최신 `main`에서 별도의 feat 브랜치를 만들고 모든 PR의 base를 `main`으로 지정합니다.
- 프로젝트 README를 실제 기술 스택, 글 작성법과 배포 절차에 맞게 갱신합니다.
- 게시글 이미지가 GitHub Pages에서 표시되도록 정적 에셋 경로를 루트 상대 URL로 변경합니다.
- 중복된 Gemini 전용 프로젝트 컨텍스트를 공용 에이전트 컨텍스트 문서로 통합합니다.
- `draft: true`인 작성 중 게시글을 홈과 게시글 목록에서 제외합니다.

### Removed

- 테이블의 행과 열을 동적으로 조작하는 예제 게시글을 제거합니다.
- 기본 화면의 게시글 카드에서 대표 이미지를 제거해 텍스트 중심으로 표시합니다.

## [2026-02-09]
- **Layout**: Implemented basic skeleton layout with responsive sidebars.
- **Styling**: Added `layout.css` with container and sidebar width variables.
- **Components**: Applied Tailwind CSS styling to `Sidebar`, `RightSidebar`, and `PostCard` to match Hugo Theme Stack aesthetic.

## Recent History
- css 초기화 (87e94f6) - 2026-02-09
- 수정 (2f0e34f) - 2026-02-02
- 업데이트 (adb2b0f) - 2026-02-02
- 스벨트 기반 블로그 (c5b758d) - 2026-02-02
- init (711b2cf) - 2026-02-02
- init (1e62be6) - 2026-02-02
