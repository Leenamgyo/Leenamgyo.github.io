<script lang="ts">
  interface GraphPost {
    slug: string;
    title: string;
    tags?: string[];
  }

  interface Props {
    posts: GraphPost[];
  }

  let { posts }: Props = $props();

  const width = 640;
  const height = 300;
  const centerX = width / 2;
  const centerY = height / 2;

  const nodes = $derived(
    posts.map((post, index) => {
      const angle = (index / Math.max(posts.length, 1)) * Math.PI * 2 - Math.PI / 2;
      const radius = posts.length === 1 ? 0 : Math.min(190, 80 + posts.length * 18);

      return {
        ...post,
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius
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

  const shorten = (title: string) => title.length > 18 ? `${title.slice(0, 18)}…` : title;
</script>

<section class="card-style mb-6 overflow-hidden p-5 sm:p-6" aria-labelledby="post-graph-title">
  <div class="mb-3">
    <h2 id="post-graph-title" class="text-lg font-bold text-gray-800 dark:text-white">
      Post graph
    </h2>
    <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
      공통 태그로 이어진 글을 한눈에 살펴보세요.
    </p>
  </div>

  <svg
    class="h-auto w-full"
    viewBox={`0 0 ${width} ${height}`}
    role="img"
    aria-label="게시글 관계 그래프"
  >
    {#each edges as edge}
      <line
        x1={edge.source.x}
        y1={edge.source.y}
        x2={edge.target.x}
        y2={edge.target.y}
        class="stroke-gray-300 dark:stroke-gray-600"
        stroke-width="2"
      >
        <title>{edge.sharedTags.join(", ")}</title>
      </line>
    {/each}

    {#each nodes as node}
      <a href={`/posts/${node.slug}`} aria-label={`${node.title} 게시글 열기`}>
        <g class="group cursor-pointer">
          <circle
            cx={node.x}
            cy={node.y}
            r="34"
            class="fill-white stroke-blue-500 transition-colors group-hover:fill-blue-50 dark:fill-gray-800 dark:stroke-blue-400 dark:group-hover:fill-gray-700"
            stroke-width="3"
          />
          <text
            x={node.x}
            y={node.y + 52}
            text-anchor="middle"
            class="fill-gray-700 text-[13px] font-semibold dark:fill-gray-200"
          >
            {shorten(node.title)}
          </text>
          <circle cx={node.x} cy={node.y} r="7" class="fill-blue-500 dark:fill-blue-400" />
        </g>
      </a>
    {/each}
  </svg>
</section>
