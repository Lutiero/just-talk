<script>
	import Topic from '$lib/components/Groups/Topic.svelte';
	import Replies from '$lib/components/Groups/Replies.svelte';
	export let data;
</script>

<Topic topic={data.topic} />

<Replies replies={data.replies} />

<div class="inputSpace">
	<form method="POST" action="?/addReply">
		<div class="input">
			<img src="https://iili.io/sRCMdb.png" alt="Imagem do usuário" />
			<input type="text" name="content" class="message" placeholder="Escrever mensagem..." />
		</div>
	</form>
</div>

<style>
	.inputSpace {
		margin-top: 20px;
	}
	.input {
		position: relative;
		width: 100%;
		background-color: white;
	}
	.input img {
		position: absolute;
		height: 30px;
		width: 30px;
		top: 5px;
		left: 15px;
	}

	input {
		width: 100%;
		padding-top: 10px;
		padding-bottom: 10px;
		background: #ffffff;
		outline: 0;
		border-width: 0 0 2px;
		border-color: white;
		padding-left: 60px;
		box-sizing: border-box;
		padding-right: 15px;
	}

	.message {
		text-align: left;
		color: #343342;
	}
</style>
