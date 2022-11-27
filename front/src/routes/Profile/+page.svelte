<script>
	import { enhance } from '$app/forms';
	export let data;
	export let message = '';
	
</script>

<section>
	<div class="header-profile">
		<a href="/home"><img class="ic_back" src="../icons/ic_back.svg" alt="" /> </a>
		<h2>Perfil</h2>
	</div>
	<div class="container-profile">
		<img class="image-profile" src={data.user.imageProfile} alt="imageProfile" />
		<form
			action="?/updateProfile"
			method="post"
			enctype="multipart/form-data"
			use:enhance={({ form, data, action, cancel }) => {
				return async ({ result, update }) => {
					if (result.data.success) {
						message = 'Dados alterados com sucesso';
					} else {
						message = 'O password atual não está correto, tente novamente.';
					}
				};
			}}
		>
			<div class="form-group file">
				<label for="avatar" class="avatar">Imagem do perfil</label>
				<input id="avatar" name="avatar" type="file" />
			</div>
			<div>
				<input type="text" name="name" value={data.user.name} />
			</div>
			<div>
				<input type="text" name="email" value={data.user.email} />
			</div>
			<p>Alterar senha</p>

			{#if message.includes('sucesso')}
				<span class="success">{message}</span>
			{:else}
				<span class="error">{message}</span>
			{/if}

			<div>
				<input type="password" name="password" value="" placeholder="Senha atual" />
			</div>
			<div>
				<input type="password" name="newpassword" value="" placeholder="Nova atual" />
			</div>
			<button type="submit">Salvar</button>
		</form>
	</div>
</section>

<style>
	section {
		/* TODO: remover o width fixo */
		min-width: 400px;
		margin: 0 auto;
		font-size: 18px;
	}
	input {
		background-color: #fafbfc;
		border: none;
		border-bottom: 1px solid black;
		padding: 10px;
		width: 90%;
	}
	input[type='password'] {
		background-color: #fafbfc;
		border: none;
		outline: none;
		border-bottom: 1px solid black;
		padding: 10px;
		width: 90%;
		color: black;
	}

	button {
		margin-top: 15px;
	}

	form {
		width: 100%;
	}

	input[type='text'] {
		font-family: 'Gilroy', sans-serif;
		color: black;
		outline: none;
	}
	.ic_back {
		width: 40px;
		background-color: rgb(48, 42, 42);
		border-radius: 50%;
	}

	.header-profile {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 10px;
		margin-bottom: 10px;
	}

	.container-profile {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.container-profile img {
		margin-bottom: 40px;
	}

	.form-group.file {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
	}

	.error {
		color: red;
		font-size: 12px;
	}

	.success {
		color: blue;
		font-size: 12px;
	}

	.image-profile {
		width: 100px;
		height: 100px;
	}
</style>
