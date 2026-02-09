<script lang="ts">
  interface Props {
    title: string;
    description: string;
    date: string;
    imageUrl?: string;
    href: string;
  }

  let { title, description, date, imageUrl, href }: Props = $props();
</script>

<article>
  {#if imageUrl}
    <div>
      <img src={imageUrl} alt={title} />
      <div></div>
    </div>
  {/if}
  
  <div>
    <div>
      
      <h2>
        <a href={href}>{title}</a>
      </h2>
      
      <p>
        {description}
      </p>
    </div>

    <div>
      <time>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        {date}
      </time>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        5 min read
      </span>
    </div>
  </div>
</article>