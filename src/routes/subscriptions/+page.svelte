<!-- file: src/routes/subscriptions/+page.svelte -->
<!-- version: 1.0.0 -->
<script>
	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('./$types').ActionData} */
	export let form;

	/** @type {import('./$types').Actions} */
	export const actions = {
		// ...

		updateSubscription: async ({ request }) => {
			const user = await requireAuth(request);

			const data = await request.formData();
			const subscriptionId = data.get('subscriptionId');
			const newPlan = data.get('newPlan');

			const subscription = await stripe.subscriptions.retrieve(subscriptionId);
			await stripe.subscriptions.update(subscriptionId, {
				items: [
					{
						id: subscription.items.data[0].id,
						price: newPlan
					}
				]
			});

			return { success: true };
		}
	};
</script>

<h1>Subscription Management</h1>

{#if form?.success}
	<p>Subscription updated successfully.</p>
{/if}

{#if data.subscription}
	<p>Current subscription status: {data.subscription.status}</p>
	<form method="POST" action="?/cancel">
		<button type="submit">Cancel Subscription</button>
	</form>
{:else}
	<p>You don't have an active subscription.</p>
	<form method="POST" action="?/subscribe">
		<button type="submit">Subscribe</button>
	</form>
{/if}

{#if data.subscription}
	<p>Current subscription status: {data.subscription.status}</p>
	<form method="POST" action="?/cancel">
		<button type="submit">Cancel Subscription</button>
	</form>
{:else}
	<p>You don't have an active subscription.</p>
	<form method="POST" action="?/subscribe">
		<button type="submit">Subscribe</button>
	</form>
{/if}

<h2>One-time Payment</h2>
<form method="POST" action="?/payment">
	<label>
		Amount:
		<input type="number" name="amount" min="1" step="0.01" required />
	</label>
	<button type="submit">Pay</button>
</form>
