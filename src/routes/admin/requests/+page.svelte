<!-- file: src/routes/admin/requests/+page.svelte -->
<!-- version: 1.0.0 -->
<script>
	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<h1>Manage Content Requests</h1>

{#if form?.success}
	<p>{form.message}</p>
{/if}

<table>
	<thead>
		<tr>
			<th>Title</th>
			<th>Description</th>
			<th>Status</th>
			<th>Actions</th>
		</tr>
	</thead>
	<tbody>
		{#each data.requests as request}
			<tr>
				<td>{request.title}</td>
				<td>{request.description}</td>
				<td>{request.status}</td>
				<td>
					<form method="POST" action="?/update">
						<input type="hidden" name="id" value={request.id} />
						<select name="status">
							<option value="pending" selected={request.status === 'pending'}>Pending</option>
							<option value="in_progress" selected={request.status === 'in_progress'}
								>In Progress</option
							>
							<option value="completed" selected={request.status === 'completed'}>Completed</option>
						</select>
						<button type="submit">Update</button>
					</form>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
