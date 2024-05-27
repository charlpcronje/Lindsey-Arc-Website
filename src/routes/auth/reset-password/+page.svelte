<!-- file: src/routes/auth/reset-password/+page.svelte -->
<!-- version: 1.0.0 -->
<script>
	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<h1>Reset Password</h1>

{#if form?.success}
	<p>{form.message}</p>
{/if}

<form method="POST">
	<input type="hidden" name="token" value={$page.url.searchParams.get('token')} />
	<label>
		New Password:
		<input type="password" name="password" required />
	</label>
	<button type="submit">Reset Password</button>
</form>
