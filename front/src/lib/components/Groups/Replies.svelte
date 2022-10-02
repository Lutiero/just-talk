<script>
	export let replies;
</script>
<div class="chat">
	{#each replies as reply}
		<div class="comments">
			<p>{reply.content}</p>
			<p>oiii</p>
		</div>
	{/each}
</div>

<style>
	.chat {
		background-color: #fafbfc;
		padding-top: 1px;
	}
	.chat ::placeholder {
		color: #343342;
	}
	.comments {
		border: 1px solid #ffffff;
		background-color: white;
		border-radius: 5px;
		padding: 10px;
		margin: 10px 15px;
	}

</style>

