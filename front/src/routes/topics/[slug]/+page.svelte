<script>
	import Topic from '$lib/components/Groups/Topic.svelte';
	import Replies from '$lib/components/Groups/Replies.svelte';
    import Form from '$lib/components/Form/Form.svelte';
	export let data;
</script>

<Topic topic={data.topic}/>

<Replies replies={data.replies} />
<Form />