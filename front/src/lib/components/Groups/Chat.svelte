<script>
	export let topics;
</script>

<div class="chat">
	{#each topics as topic}
		<div class="comments">
            <a href="/topic/{topic.id}">
			<p>{topic.content}</p>
            </a>
		</div>
		<div class="peoplesChat">
			<h5>Dr. Silvia Lima</h5>
        <a href="/">
			{topic.repliesAmount === 0 ? '' : topic.repliesAmount + 'respostas'}
        </a>
		</div>
        {/each}
	<div class="inputSpace">
		<form>
			<div class="input">
				<img src="https://iili.io/sRCMdb.png" alt="Imagem do usuário">
				<input type="text" class="mensage" placeholder="Escrever mensagem..." />
			</div>
		</form>
	</div>
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

	.peoplesChat {
		display: flex;
		padding-left: 15px;
		padding-right: 15px;
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
	.chat input {
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
	.comments {
		border: 1px solid #ffffff;
		background-color: white;
		border-radius: 5px;
		padding: 10px;
		margin: 10px 15px;
	}
	.mensage {
		text-align: left;
	}

    a {
        color: #343342;
    }

    a:visited {
        color: #343342;
    }
</style>
