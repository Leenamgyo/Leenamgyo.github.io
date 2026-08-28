# Conventions

## Svelte and TypeScript

- Svelte 5 runes(`$state`, `$derived`, `$effect`)와 snippets를 사용한다. 레거시 `$:` 구문은 사용하지 않는다.
- TypeScript를 유지하고 공유 데이터와 컴포넌트 props에는 명시적 interface를 사용한다.
- `window`, `document` 등 브라우저 전용 API는 서버에서 실행되지 않도록 가드한다.
- 편집하는 파일의 기존 포맷을 따르고 관련 없는 부분을 리포맷하지 않는다.

## Content and assets

- Markdown frontmatter 필수 필드는 `title`, `date`다. 선택 필드는 `description`, `image`, `tags`다.
- 날짜는 `new Date(date)`로 파싱 가능해야 하며 ISO 8601을 권장한다.
- `src/lib/utils/posts.ts`의 `import.meta.glob`은 eager 모드를 유지한다. lazy 로딩으로 바꾸면 프리렌더가 깨진다.
- `static/` 에셋은 Markdown과 설정에서 `/images/example.jpg` 같은 루트 상대 URL로 참조한다. URL에 `static/`을 포함하거나 `../` 경로를 사용하지 않는다.
- 내비게이션, 위젯, 소셜 링크는 컴포넌트에 하드코딩하지 않고 `config.yaml`에서 관리한다.

