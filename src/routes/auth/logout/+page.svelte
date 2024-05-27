<!-- file: src/routes/auth/logout/+page.svelte -->
<!-- version: 1.0.0 -->
<script>
	import { goto } from '$app/navigation';

	/** @type {import('./$types').ActionData} */
	export let form;

	if (form?.success) {
		goto('/');
	}
</script>

<form method="POST">
	<button type="submit">Logout</button>
</form>
