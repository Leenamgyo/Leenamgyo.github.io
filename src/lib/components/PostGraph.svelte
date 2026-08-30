<script lang="ts">
  interface GraphPost {
    slug: string;
    title: string;
    description?: string;
    tags?: string[];
  }

  interface Props {
    posts: GraphPost[];
  }

  let { posts }: Props = $props();
  let query = $state("");
  let hoveredSlug = $state<string | null>(null);

  const width = 720;
  const height = 400;
  const centerX = width / 2;
  const centerY = height / 2;

  const normalizedQuery = $derived(query.trim().toLocaleLowerCase());
  const nodes = $derived(
    posts.map((post, index) => {
      const angle = (index / Math.max(posts.length, 1)) * Math.PI * 2 - Math.PI / 2;
      const radius = posts.length === 1 ? 0 : Math.min(245, 110 + posts.length * 15);
      const tagOffset = (post.tags?.join("").length ?? 0) % 24;

      return {
        ...post,
        x: centerX + Math.cos(angle) * (radius + tagOffset),
        y: centerY + Math.sin(angle) * (radius - tagOffset / 2),
        radius: Math.min(16, 9 + (post.tags?.length ?? 0) * 2)
      };
    })
  );
  const edges = $derived(
    nodes.flatMap((source, sourceIndex) =>
      nodes.slice(sourceIndex + 1).flatMap((target) => {
        const sharedTags = source.tags?.filter((tag) => target.tags?.includes(tag)) ?? [];
        return sharedTags.length > 0 ? [{ source, target, sharedTags }] : [];
      })
    )
  );
  const matchedSlugs = $derived(
    new Set(
      normalizedQuery
        ? posts
            .filter((post) =>
              [post.title, post.description, ...(post.tags ?? [])]
                .filter(Boolean)
                .some((value) => value?.toLocaleLowerCase().includes(normalizedQuery))
            )
            .map((post) => post.slug)
        : posts.map((post) => post.slug)
    )
  );
  const searchResults = $derived(
    normalizedQuery ? posts.filter((post) => matchedSlugs.has(post.slug)).slice(0, 5) : []
  );

  const isEmphasized = (slug: string) => {
    if (normalizedQuery) return matchedSlugs.has(slug);
    if (!hoveredSlug) return true;
    return slug === hoveredSlug || edges.some((edge) =>
      (edge.source.slug === hoveredSlug && edge.target.slug === slug) ||
      (edge.target.slug === hoveredSlug && edge.source.slug === slug)
    );
  };

  const isEdgeEmphasized = (sourceSlug: string, targetSlug: string) => {
    if (normalizedQuery) return matchedSlugs.has(sourceSlug) && matchedSlugs.has(targetSlug);
    return !hoveredSlug || sourceSlug === hoveredSlug || targetSlug === hoveredSlug;
  };

  const shorten = (title: string) => title.length > 22 ? `${title.slice(0, 22)}…` : title;
</script>

<section class="graph-shell card-style mb-6 overflow-hidden" aria-labelledby="post-graph-title">
  <div class="relative z-10 border-b border-gray-200 p-4 dark:border-white/10 sm:flex sm:items-center sm:justify-between sm:gap-5 sm:p-5">
    <div>
      <div class="flex items-center gap-2">
        <span class="h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.9)]"></span>
        <h2 id="post-graph-title" class="text-base font-semibold text-gray-800 dark:text-white">Post graph</h2>
        <span class="rounded-full bg-violet-100 px-2 py-0.5 text-xs text-violet-700 dark:bg-white/10 dark:text-slate-300">{posts.length}</span>
      </div>
      <p class="mt-1 text-xs text-gray-500 dark:text-slate-400">공통 태그로 연결된 게시글을 탐색하세요.</p>
    </div>

    <label class="relative mt-3 block sm:mt-0 sm:w-64">
      <span class="sr-only">게시글 그래프 검색</span>
      <svg class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <circle cx="11" cy="11" r="7"></circle>
        <path d="m20 20-3.5-3.5"></path>
      </svg>
      <input bind:value={query} type="search" placeholder="제목, 태그, 내용 검색" class="w-full rounded-lg border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-violet-400/70 focus:ring-2 focus:ring-violet-400/20 dark:border-white/10 dark:bg-black/25 dark:text-white dark:placeholder:text-slate-500" />
    </label>
  </div>

  {#if normalizedQuery}
    <div class="relative z-10 flex min-h-11 flex-wrap items-center gap-2 border-b border-gray-200 px-4 py-2 dark:border-white/10 sm:px-5">
      {#each searchResults as result}
        <a href={`/posts/${result.slug}`} class="rounded-full border border-violet-300 bg-violet-50 px-3 py-1 text-xs text-violet-700 transition hover:bg-violet-100 dark:border-violet-400/30 dark:bg-violet-400/10 dark:text-violet-100 dark:hover:bg-violet-400/20">{result.title}</a>
      {:else}
        <span class="text-xs text-gray-500 dark:text-slate-400">일치하는 게시글이 없습니다.</span>
      {/each}
    </div>
  {/if}

  <div class="graph-stage relative">
    <svg class="block h-[300px] w-full sm:h-[380px]" viewBox={`0 0 ${width} ${height}`} role="img" aria-label="검색 가능한 게시글 관계 그래프" preserveAspectRatio="xMidYMid meet">
      <defs>
        <radialGradient id="node-glow"><stop offset="0%" stop-color="var(--node-light)" /><stop offset="55%" stop-color="var(--node-mid)" /><stop offset="100%" stop-color="var(--node-dark)" /></radialGradient>
        <filter id="glow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>

      {#each edges as edge}
        <line x1={edge.source.x} y1={edge.source.y} x2={edge.target.x} y2={edge.target.y} stroke={isEdgeEmphasized(edge.source.slug, edge.target.slug) ? "var(--edge-active)" : "var(--edge-muted)"} stroke-opacity={isEdgeEmphasized(edge.source.slug, edge.target.slug) ? 0.85 : 0.25} stroke-width={isEdgeEmphasized(edge.source.slug, edge.target.slug) ? 1.6 : 1} class="transition-all duration-200"><title>{edge.sharedTags.join(", ")}</title></line>
      {/each}

      {#each nodes as node}
        <a href={`/posts/${node.slug}`} aria-label={`${node.title} 게시글 열기`} onmouseenter={() => hoveredSlug = node.slug} onmouseleave={() => hoveredSlug = null} onfocus={() => hoveredSlug = node.slug} onblur={() => hoveredSlug = null}>
          <g class="group cursor-pointer transition-opacity duration-200" opacity={isEmphasized(node.slug) ? 1 : 0.18}>
            <circle cx={node.x} cy={node.y} r={node.radius + 8} fill="var(--node-dark)" opacity="0.13" filter="url(#glow)" />
            <circle cx={node.x} cy={node.y} r={node.radius} fill="url(#node-glow)" class="origin-center transition-transform duration-200 group-hover:scale-125" />
            <text x={node.x} y={node.y + node.radius + 20} text-anchor="middle" fill="var(--graph-label)" class="pointer-events-none text-[13px] font-medium">{shorten(node.title)}</text>
          </g>
        </a>
      {/each}
    </svg>

    <div class="pointer-events-none absolute bottom-3 right-3 rounded-md border border-gray-200 bg-white/80 px-2 py-1 text-[11px] text-gray-500 dark:border-white/10 dark:bg-black/25 dark:text-slate-500">노드를 선택해 글 열기</div>
  </div>
</section>

<style>
  .graph-shell {
    --node-light: #ede9fe;
    --node-mid: #a78bfa;
    --node-dark: #7c3aed;
    --edge-active: #8b5cf6;
    --edge-muted: #c4b5fd;
    --graph-label: #374151;
    background: linear-gradient(145deg, #ffffff 0%, #fafafa 55%, #f7f5ff 100%);
    border-color: rgb(229 231 235);
  }

  .graph-stage {
    background-image: radial-gradient(circle at 50% 45%, rgb(124 58 237 / 0.08), transparent 42%), radial-gradient(circle, rgb(107 114 128 / 0.14) 1px, transparent 1px);
    background-size: auto, 22px 22px;
  }

  :global(.dark) .graph-shell {
    --node-light: #ddd6fe;
    --node-mid: #a78bfa;
    --node-dark: #7c3aed;
    --edge-active: #8b7ab8;
    --edge-muted: #3d3948;
    --graph-label: #e2e8f0;
    background: linear-gradient(145deg, #1c1924 0%, #111017 55%, #191522 100%);
    border-color: rgb(255 255 255 / 0.08);
  }

  :global(.dark) .graph-stage {
    background-image: radial-gradient(circle at 50% 45%, rgb(124 58 237 / 0.1), transparent 42%), radial-gradient(circle, rgb(255 255 255 / 0.08) 1px, transparent 1px);
  }
</style>
