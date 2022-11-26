<script>
	import { enhance } from '$app/forms';
	import Topics from '$lib/components/Groups/Topics.svelte';
	import Form from '$lib/components/Form/Form.svelte';

	export let data;
	export let message = 'Entrar nesse grupo';
	export let iconGroup = '+';
</script>

<div class="container-theme">
	<div class="header" id="myHeader" style="background-image: url('{data.theme.largeImage}')">
		<div />

		<div class="title">
			<div class="return">
				<a href="/home"><img src="../icons/ic_back.svg" alt="icon-voltar" /> </a>
			</div>
			<h1>{data.theme.title}</h1>
			<span>{data.theme.subscribersAmount} pessoa(s)</span>
		</div>
		<div class="buttomTheme">
			<form
				method="POST"
				action="?/addUserThemes"
				use:enhance={({ form, data, action, cancel }) => {
					return async ({ result, update }) => {
						if (result.data.success) {
							iconGroup = '-';
							message = 'Sair desse grupo';
						}
					};
				}}
			>
				<button>
					{#if data.success}
						<p>-</p>
						Sair desse grupo
					{:else}
						<p>+</p>
						Entrar nesse grupo
					{/if}
				</button>
			</form>
		</div>
	</div>
	<Topics topics={data.topics} />

	<div class="inputSpace">
		<form method="POST" action="?/addTopic">
			<div class="input">
				<img src={data.currentUser.imageProfile} alt="Imagem do usuário" />
				<input type="text" name="content" class="message" placeholder="Escrever mensagem..." />
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

	.return {
		text-align: left;
		position: absolute;
		top: 50px;
		left: 50px;
	}
	.title {
		position: relative;
	}
	#myHeader {
		background-repeat: no-repeat;
		background-size: cover;
		height: 250px;
		margin: -15px;
	}
	.header h1 {
		letter-spacing: 1.92px;
		color: #ffffff;
		opacity: 1;
		margin: 0px;
		padding-top: 110px;
		font-size: 24px;
	}
	#myHeader .title {
		text-align: center;
	}
	#myHeader .title span {
		letter-spacing: 0px;
		color: #f5f5f8;
		opacity: 1;
		padding-bottom: 30px;
		font-size: 13px;
	}
	#myHeader button {
		margin-top: 30px;
		text-align: center;
		background: none;
		border: none;
		letter-spacing: 0.32px;
		color: #fafbfc;
		opacity: 1;
	}
	#myHeader .buttomTheme {
		text-align: center;
	}
	#myHeader p {
		display: inline;
	}

	.container-theme {
		width: 400px;
	}
</style>
