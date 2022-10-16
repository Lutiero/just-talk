<script>
	import Form from '$lib/components/Form/Form.svelte';

	export let topics;
</script>

<div class="chat">
	{#each topics as topic}
		<div class="comments">
			<a href="/topics/{topic.id}">
				<p>{topic.content}</p>
			</a>
		</div>
		<div class="peoplesChat">
			<img src="https://iili.io/sRCMdb.png" alt="Imagem do usuário" />
			<h5>Dr. Silvia Lima</h5>
			<a href="/topics/{topic.id}">
				{topic.repliesAmount === 0 ? '' : topic.repliesAmount + ' respostas'}
			</a>
		</div>
	{/each}
</div>

<style>
	.peoplesChat {
		display: flex;
		padding-left: 15px;
		padding-right: 15px;
		align-items: center;
		color: #a7b6c4;
		font-size: 13px;
	}
	.peoplesChat img {
		width: 24px;
		height: 24px;
		margin-right: 10px;
	}
	.peoplesChat h5 {
		font-size: 13px;
		margin: 0;
		padding-right: 50px;
	}
	.peoplesChat a {
		font-weight: 400;
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

	.comments a {
		color: #343342;
		font-weight: 300;
	}

	a:visited {
		color: #343342;
	}

</style>
