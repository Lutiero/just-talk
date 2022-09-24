<script>
	import Chat from '$lib/components/Groups/Chat.svelte';
	import Topic from '$lib/components/Groups/Topic.svelte';

	export let data;
</script>

<div>
	<Topic theme={data.theme} />
	<Chat />
</div>
