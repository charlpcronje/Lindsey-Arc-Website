<!-- file: src/routes/auth/login/+page.svelte -->
<!-- version: 1.0.0 -->
<script>
	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<h1>Login</h1>

{#if form?.success}
	<p>{form.message}</p>
{/if}

<form method="POST">
	<label>
		Email:
		<input type="email" name="email" required />
	</label>
	<label>
		Password:
		<input type="password" name="password" required />
	</label>
	<button type="submit">Login</button>
</form>
