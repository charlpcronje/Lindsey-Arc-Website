<!-- file: src/routes/admin/posts/new/+page.svelte -->
<!-- version: 1.0.0 -->
<script>
	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<h1>New Post</h1>

{#if form?.success}
	<p>{form.message}</p>
{/if}

<form method="POST">
	<label>
		Title:
		<input type="text" name="title" required />
	</label>
	<label>
		Content:
		<textarea name="content" rows="10" required></textarea>
	</label>
	<button type="submit">Create Post</button>
</form>
