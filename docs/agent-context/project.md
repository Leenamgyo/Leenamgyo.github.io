# Project context

## Stack

- SvelteKit
- Svelte 5
- TypeScript
- mdsvex
- Tailwind CSS 4
- Static adapter와 `404.html` fallback을 사용하는 GitHub Pages 블로그

## Commands

```bash
npm install
npm run check
npm run build
npm run dev
npm run preview
```

## Structure

| 경로 | 역할 |
|---|---|
| `src/routes/[...slug]` | 독립 페이지와 포스트를 렌더링하는 catch-all 라우트 |
| `src/lib/utils/posts.ts` | `import.meta.glob`으로 Markdown을 eager 로딩 |
| `content/posts/*.md` | 블로그 포스트. 파일명이 URL slug |
| `content/*.md` | About, Archives, Search 등 독립 페이지 |
| `config.yaml` | 내비게이션, 위젯, 소셜 링크 설정 |
| `templates/post.2026.02.20.md` | 포스트 템플릿 |
| `static/` | 배포 루트에 그대로 제공되는 정적 에셋 |

