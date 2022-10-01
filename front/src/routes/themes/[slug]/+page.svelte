<script>
	import Topic from '$lib/components/Groups/Topic.svelte';
	import Chat from '$lib/components/Groups/Chat.svelte';

	export let data;
</script>

<div>
	<Topic theme={data.theme} />
	<Chat topics={data.topics}/>
</div>
