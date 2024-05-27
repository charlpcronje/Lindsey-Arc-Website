<!-- file: src/routes/requests/new/+page.svelte -->
<!-- version: 1.0.0 -->
<script>
	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<h1>Request Custom Content</h1>

{#if form?.success}
	<p>{form.message}</p>
{/if}

<form method="POST">
	<label>
		Title:
		<input type="text" name="title" required />
	</label>
	<label>
		Description:
		<textarea name="description" rows="5" required></textarea>
	</label>
	<button type="submit">Submit Request</button>
</form>
