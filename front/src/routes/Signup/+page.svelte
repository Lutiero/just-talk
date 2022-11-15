<script>
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	export let message = false;
	export let form;
</script>

<div class="signup">
	<p>Registre-se</p>
	<span>preencha seus dados para criarmos sua conta</span>
	<form
		action="?/signup"
		enctype="multipart/form-data"
		method="POST"
		use:enhance={({ form, data, action, cancel }) => {
			return async ({ result, update }) => {
				if (result.data.success) {
					goto('/home');
				} else {
					message = true;
				}
			};
		}}
	>
		<div class="form-group">
			<label for="name">Nome</label>
			<input class="input" name="name" type="text" placeholder="Digite seu nome completo..." />
		</div>
		<div class="form-group">
			<label for="email">Email</label>
			<input name="email" type="email" placeholder="Digite seu email..." />
			{#if form?.missing}<p class="error">The email field is required</p>{/if}
		</div>
		<div class="form-group">
			<label for="password">Password</label>
			<input name="password" type="password" placeholder="Digite sua senha..." />
		</div>
		<div class="form-group file">
			<label for="avatar" class="avatar">Imagem do perfil</label>
			<input id="avatar" name="avatar" type="file" />
		</div>
		<div class="form-group button">
			{#if message}
				<span class="error">Alguns campos estão inválidos</span>
			{/if}
			<button class="buttoncreate">Criar nova conta</button>
		</div>
	</form>
	<div class="entrar">
		<span>Já possui conta? <a href="/Signin">Entrar</a></span>
	</div>
</div>

<style>
	input {
		background-color: white;
		color: black;
	}
	.entrar {
		font: normal normal normal 16px/22px Gilroy;
		color: #a7b6c4;
		text-align: center;
		padding-top: 20px;
	}

	.entrar a {
		color: #3ab4d1;
	}

	input::placeholder {
		font: normal normal normal 16px/22px Gilroy;
		color: #a7b6c4;
	}

	.signup p {
		font: normal normal bold 32px/46px Gilroy;
		margin-bottom: 10px;
	}

	.signup span {
		font: normal normal normal 16px/22px Gilroy;
		color: #a7b6c4;
	}

	.signup label {
		font: normal normal bold 18px/24px Gilroy;
	}

	.signup input {
		font: normal normal normal 18px/24px Gilroy;
		border: none;
		outline: none;
		border-bottom: 2px solid #3ab4d1;
		width: 100%;
		box-shadow: none;
	}

	.signup input:focus {
		border-bottom: 2px solid #0e7917;
	}

	.signup .form-group {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		gap: 5px;
		margin-top: 20px;
	}

	.signup .form-group.button {
		align-items: center;
		padding-top: 5px;
	}

	.signup .buttoncreate {
		background: transparent linear-gradient(100deg, #3ab4d1 0%, #2596b1 100%) 0% 0% no-repeat
			padding-box;
		box-shadow: 0px 4px 16px #3ab4d152;
		border: 1px solid #2ca8c6;
		border-radius: 8px;
		width: 100%;
		padding: 15px 0 15px 0;
		margin-top: 20px;
		color: white;
		font: normal normal bold 18px/26px Gilroy;
	}

	span.error {
		color: red;
	}

	input[type='file'] {
		display: none;
	}

	.avatar {
	padding: 10px 60px;
    width: 200px;
    background-color: #333;
    color: #FFF;
    text-transform: uppercase;
    text-align: center;
    display: block;
    margin-top: 10px;
    cursor: pointer;
	border-radius: 4px;
	}

	.form-group.file {
		display: flex;
		align-items: center;
	}
</style>
