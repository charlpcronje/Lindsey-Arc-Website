<!-- file: src/routes/blog/+page.svelte -->
<!-- version: 1.0.0 -->
<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>Blog Posts</h1>

{#each data.posts as post}
	<article>
		<h2><a href="/blog/{post.id}">{post.title}</a></h2>
		<p>{post.content}</p>
	</article>
{/each}
