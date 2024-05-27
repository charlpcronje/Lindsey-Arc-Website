<!-- file: src/routes/auth/forgot-password/+page.svelte -->
<!-- version: 1.0.0 -->
<script>
	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<h1>Forgot Password</h1>

{#if form?.success}
	<p>{form.message}</p>
{/if}

<form method="POST">
	<label>
		Email:
		<input type="email" name="email" required />
	</label>
	<button type="submit">Reset Password</button>
</form>
