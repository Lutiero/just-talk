<script>
	import ChatOnly from '$lib/components/Groups/ChatOnly.svelte';
	import Replies from '$lib/components/Groups/Replies.svelte';
    import Form from '$lib/components/Form/Form.svelte';
	export let data;
</script>

<ChatOnly topic={data.topic}/>

<Replies />
<Form />