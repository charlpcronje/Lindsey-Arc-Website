<!-- file: src/routes/blog/[id]/+page.svelte -->
<!-- version: 1.0.0 -->
<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<article>
	<h1>{data.post.title}</h1>
	<p>{data.post.content}</p>
</article>
