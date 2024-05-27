<!-- file: src/routes/uploads/+page.svelte -->
<!-- version: 1.0.1 -->
<script>
	import { generateDownloadLink } from '$lib/utils.js';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>Uploaded Content</h1>

<ul>
	{#each data.uploads as upload}
		<li>
			<a href={generateDownloadLink(upload.id, data.user.id)} download>{upload.title}</a>
			<span>Uploaded by {upload.user.email}</span>
		</li>
	{/each}
</ul>
