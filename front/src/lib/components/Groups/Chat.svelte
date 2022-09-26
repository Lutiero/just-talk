<script>
	export let topics;
    export let replies;
</script>

<div class="chat">
	{#each topics as topic}
		<div class="comments">
			<p>{topic.content}</p>
		</div>
		<div class="peoplesChat">
			<h5>Dr. Silvia Lima</h5>
			<a href="/">{topic.repliesAmount} respostas ></a>
		</div>
        {#each replies as reply}
             <div class="comments">
                 <p>{reply.content}</p>
             </div>
             <div class="user">
                 <h5>Você</h5>
                 <img src="https://iili.io/sRCMdb.png" alt="user" />
             </div>
        {/each}
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
	.user {
		white-space: nowrap;
		text-align: right;
	}
	.user img {
		height: 24px;
		width: 24px;
		padding-right: 15px;
	}
	.user h5 {
		display: inline;
		color: #a7b6c4;
		font-size: 13px;
		text-align: right;
		padding-right: 5px;
	}
	.peoplesChat img {
		height: 24px;
		widows: 24px;
		padding-right: 5px;
	}
	.peoplesChat {
		display: flex;
		padding-left: 15px;
		padding-right: 15px;
	}
	.peoplesChat h5 {
		color: #a7b6c4;
		font-size: 13px;
		margin: 0;
		padding-right: 50px;
	}
	.peoplesChat a {
		color: #3ab4d1;
		font-weight: 400;
	}
	.chat {
		background-color: #fafbfc;
		padding-top: 1px;
	}
	.chat ::placeholder {
		color: #a7b6c4;
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
</style>
