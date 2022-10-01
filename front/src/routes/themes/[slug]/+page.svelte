<script>
	import Theme from '$lib/components/Groups/Theme.svelte';
	import Topics from '$lib/components/Groups/Topics.svelte';

	export let data;
</script>

<div>
	<Theme theme={data.theme} />
	<Topics topics={data.topics}/>
</div>
