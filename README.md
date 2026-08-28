# Git Blog

Markdown으로 글을 관리하는 SvelteKit 기반 개인 기술 블로그입니다. mdsvex로 콘텐츠를 렌더링하고, 정적 사이트로 빌드해 GitHub Pages에 배포합니다.

## 기술 스택

- SvelteKit 2 / Svelte 5
- TypeScript
- mdsvex
- Tailwind CSS 4
- Vite 7
- `@sveltejs/adapter-static`

## 시작하기

Node.js 20 이상과 npm이 필요합니다.

```sh
npm install
npm run dev
```

개발 서버가 시작되면 터미널에 표시된 로컬 주소에서 사이트를 확인할 수 있습니다.

## 주요 명령어

```sh
npm run dev      # 개발 서버 실행
npm run check    # Svelte 및 TypeScript 검사
npm run build    # 정적 사이트를 build/에 생성
npm run preview  # 프로덕션 빌드 미리 보기
```

## 글 작성

`content/posts/`에 Markdown 파일을 추가합니다. 파일명이 URL slug가 됩니다.

```md
---
title: 글 제목
description: 글에 대한 짧은 설명
image: /images/cover.jpg
date: 2026-08-28
tags:
  - Svelte
  - TypeScript
draft: false
---

본문을 작성합니다.
```

새 글을 만들 때는 `templates/post.2026.02.20.md`를 기본 형식으로 사용할 수 있습니다.

- 정적 파일은 `static/`에 저장하고 `/images/cover.jpg`처럼 루트 기준 경로로 참조합니다.
- 글은 `date`를 기준으로 최신순 정렬되므로 JavaScript에서 해석할 수 있는 날짜를 사용합니다.
- 파일명을 바꾸면 공개 URL도 바뀝니다.
- `draft` 필드는 템플릿에 포함되어 있지만 현재 빌드에서 초안을 자동으로 제외하지는 않습니다.

## 사이트 설정

`config.yaml`에서 사이트 이름, 설명, 작성자, 메뉴, 소셜 링크와 사이드바 위젯을 관리합니다.

```yaml
site:
  title: "My Tech Blog"
  description: "A blog about web development"
  author: "Your Name"
```

일반 페이지는 `content/about.md`, `content/archives.md`, `content/search.md`처럼 `content/` 바로 아래에 둡니다. 글과 일반 페이지는 모두 `src/routes/[...slug]`의 catch-all 라우트에서 렌더링됩니다.

## 프로젝트 구조

```text
.
├── content/              # Markdown 페이지와 게시글
├── src/
│   ├── lib/components/   # 공용 Svelte 컴포넌트
│   ├── lib/styles/       # 전역 스타일
│   ├── lib/utils/        # 게시글 로딩 로직
│   └── routes/           # SvelteKit 페이지와 레이아웃
├── static/               # 이미지, robots.txt 등 정적 파일
├── templates/            # 게시글 템플릿
├── config.yaml           # 사이트 및 메뉴 설정
└── svelte.config.js      # mdsvex와 정적 어댑터 설정
```

## 배포

`main` 브랜치에 push하면 GitHub Actions가 의존성을 설치하고 정적 빌드를 생성한 뒤 `gh-pages` 브랜치에 배포합니다. 워크플로는 `.github/workflows/deploy.yml`에서 확인할 수 있습니다.

변경사항을 올리기 전 다음 검사를 권장합니다.

```sh
npm run check
npm run build
```
