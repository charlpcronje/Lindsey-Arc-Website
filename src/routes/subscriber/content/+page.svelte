<!-- file: src/routes/subscriber/content/+page.svelte -->
<!-- version: 1.0.0 -->
<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>Subscriber Content</h1>

{#each data.content as item}
	<article>
		<h2>{item.title}</h2>
		<p>{item.content}</p>
	</article>
{/each}
