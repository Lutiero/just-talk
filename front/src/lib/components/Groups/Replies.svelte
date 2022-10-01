<script>
	export let replies;
</script>

{#each replies as reply}
	<p>{reply.content}</p>
{/each}
