<script>
	export let replies;
</script>
<div class="chat">
	{#each replies as reply}
	
		<div class="comments">
			<p>{reply.content}</p>
		</div>
		<div class="person">
			<img src="https://iili.io/sRCMdb.png" alt="Imagem do usuário" />
			<p>Dr. Silvia Lima</p>
		</div>
	
	{/each}
</div>

<style>
	.person{
		display: flex;
    align-items: center;
		color: #A7B6C4;
		font-size: 13px;
		font-weight: bold;
	}
	.person img{
		height: 24px;
		width: 24px;
		margin-left: 15px;
		margin-right: 10px;
	}
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

