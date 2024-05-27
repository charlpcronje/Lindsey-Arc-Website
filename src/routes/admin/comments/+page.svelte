<!-- file: src/routes/admin/comments/+page.svelte -->
<!-- version: 1.0.0 -->
<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>Moderate Comments</h1>

{#each data.comments as comment}
	<article>
		<p>{comment.content}</p>
		<form method="POST" action="?/approve">
			<input type="hidden" name="id" value={comment.id} />
			<button type="submit">Approve</button>
		</form>
		<form method="POST" action="?/delete">
			<input type="hidden" name="id" value={comment.id} />
			<button type="submit">Delete</button>
		</form>
	</article>
{/each}
