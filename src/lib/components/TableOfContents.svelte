<script lang="ts">
  import { onMount } from "svelte";

  interface Heading {
    id: string;
    text: string;
    level: number;
    children: Heading[];
  }

  let title = $state("");
  let titleId = $state("");
  let headings: Heading[] = $state([]);
  let activeId = $state("");

  function buildTree(
    flat: { id: string; text: string; level: number }[],
  ): Heading[] {
    const root: Heading[] = [];
    const stack: Heading[] = [];

    for (const item of flat) {
      const node: Heading = { ...item, children: [] };

      while (stack.length > 0 && stack[stack.length - 1].level >= node.level) {
        stack.pop();
      }

      if (stack.length === 0) {
        root.push(node);
      } else {
        stack[stack.length - 1].children.push(node);
      }
      stack.push(node);
    }
    return root;
  }

  function parseHeadings() {
    const article = document.querySelector("article");
    if (!article) {
      title = "";
      headings = [];
      return;
    }

    // Get title from h1
    const h1 = article.querySelector("h1");
    if (h1) {
      if (!h1.id) h1.id = "article-title";
      title = h1.textContent || "";
      titleId = h1.id;
    } else {
      title = "";
      titleId = "";
    }

    // Get sub-headings (h2-h4)
    const elements = article.querySelectorAll("h2, h3, h4");
    const flat = Array.from(elements).map((el, index) => {
      if (!el.id) el.id = `heading-${index}`;
      return {
        id: el.id,
        text: el.textContent || "",
        level: Number(el.tagName[1]),
      };
    });

    headings = buildTree(flat);
  }

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function setupScrollSpy() {
    const article = document.querySelector("article");
    if (!article) return;

    const allHeadings = article.querySelectorAll("h1, h2, h3, h4");
    if (allHeadings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeId = entry.target.id;
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 },
    );

    allHeadings.forEach((h) => observer.observe(h));

    return () => observer.disconnect();
  }

  onMount(() => {
    parseHeadings();
    const cleanup = setupScrollSpy();
    return cleanup;
  });
</script>

{#snippet tocItems(items: Heading[])}
  <ul class="toc-list">
    {#each items as heading}
      <li>
        <a
          href="#{heading.id}"
          class="toc-link"
          class:active={activeId === heading.id}
          onclick={(e: MouseEvent) => {
            e.preventDefault();
            scrollTo(heading.id);
          }}
        >
          {heading.text}
        </a>
        {#if heading.children.length > 0}
          {@render tocItems(heading.children)}
        {/if}
      </li>
    {/each}
  </ul>
{/snippet}

<div class="card-style toc-widget">
  <p class="toc-label">TABLE OF CONTENTS</p>

  {#if title}
    <a
      href="#{titleId}"
      class="toc-title"
      class:active={activeId === titleId}
      onclick={(e: MouseEvent) => {
        e.preventDefault();
        scrollTo(titleId);
      }}
    >
      {title}
    </a>
    <div class="toc-divider"></div>
  {/if}

  {#if headings.length > 0}
    {@render tocItems(headings)}
  {/if}
</div>

<style>
  .toc-widget {
    padding: 1.25rem;
    position: sticky;
    top: 2.5rem;
  }

  .toc-label {
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #9ca3af;
    margin: 0 0 0.75rem;
  }

  .toc-title {
    display: block;
    font-size: 0.925rem;
    font-weight: 700;
    color: #1f2937;
    text-decoration: none;
    padding: 0.25rem 0;
    transition: color 0.2s;
  }

  .toc-title:hover {
    color: #3b82f6;
  }

  .toc-title.active {
    color: #3b82f6;
  }

  :global(.dark) .toc-title {
    color: #f1f5f9;
  }

  :global(.dark) .toc-title:hover,
  :global(.dark) .toc-title.active {
    color: #60a5fa;
  }

  .toc-divider {
    height: 1px;
    background: #e5e7eb;
    margin: 0.625rem 0;
  }

  :global(.dark) .toc-divider {
    background: #334155;
  }

  /* List styles */
  .toc-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .toc-list .toc-list {
    padding-left: 0.875rem;
    border-left: 1px solid #e5e7eb;
    margin-left: 0.375rem;
  }

  :global(.dark) .toc-list .toc-list {
    border-left-color: #334155;
  }

  .toc-link {
    display: block;
    font-size: 0.825rem;
    color: #6b7280;
    text-decoration: none;
    line-height: 1.4;
    padding: 0.3rem 0;
    transition:
      color 0.15s,
      transform 0.15s;
  }

  .toc-link:hover {
    color: #3b82f6;
  }

  .toc-link.active {
    color: #3b82f6;
    font-weight: 600;
  }

  :global(.dark) .toc-link {
    color: #9ca3af;
  }

  :global(.dark) .toc-link:hover,
  :global(.dark) .toc-link.active {
    color: #60a5fa;
  }
</style>
