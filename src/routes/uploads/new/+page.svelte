<!-- file: src/routes/uploads/new/+page.svelte -->
<!-- version: 1.0.0 -->
<script>
	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<h1>Upload Content</h1>

{#if form?.success}
	<p>{form.message}</p>
{/if}

<form method="POST" enctype="multipart/form-data">
	<label>
		Title:
		<input type="text" name="title" required />
	</label>
	<label>
		File:
		<input type="file" name="file" required />
	</label>
	<label>
		Recipient Email (optional):
		<input type="email" name="recipient_email" />
	</label>
	<button type="submit">Upload</button>
</form>
