<div class="signup">
	<p>Registre-se</p>
	<span>preencha seus dados para criarmos sua conta</span>
	<form action="?/signup" method="POST">
		<div class="form-group">
			<label for="name">Nome</label>
			<input class="input" name="name" type="text" placeholder="Digite seu nome completo..." />
		</div>
		<div class="form-group">
			<label for="email">Email</label>
			<input name="email" type="email" placeholder="Digite seu email..." />
		</div>
		<div class="form-group">
			<label for="password">Password</label>
			<input name="password" type="password" placeholder="Digite sua senha..." />
		</div>
		<div class="form-group button">
			<button class="buttoncreate">Criar nova conta</button>
		</div>
	</form>
	<div class="entrar">
		<span>Já possui conta? <a href="">Entrar</a></span>
	</div>
</div>

<style>

	.entrar{
		font: normal normal normal 16px/22px Gilroy;
		color: #A7B6C4;
		text-align: center;
		padding-top: 20px;
	}

	.entrar a{
		color: black;
	}

	input::placeholder {
		font: normal normal normal 16px/22px Gilroy;
		color: #A7B6C4;
	}

	.signup p {
		font: normal normal bold 32px/46px Gilroy;
		margin-bottom: 10px;
	}

	.signup span {
		font: normal normal normal 16px/22px Gilroy;
		color: #A7B6C4;
	}

	.signup label{
		font: normal normal bold 18px/24px Gilroy;
	}

	.signup input {
		border: none;
		border-bottom: 2px solid #3AB4D1;
		width: 100%;
		box-shadow: none;
	}

	.signup .form-group {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		gap: 5px;
		margin-top: 5px;
	}

	.signup .form-group.button {
		align-items: center;
		padding-top: 5px;
	}

	.signup .buttoncreate {
		background: transparent linear-gradient(100deg, #3AB4D1 0%, #2596B1 100%) 0% 0% no-repeat padding-box;
		box-shadow: 0px 4px 16px #3AB4D152;
		border: 1px solid #2CA8C6;
		border-radius: 8px;
		width: 100%;
		padding: 15px 0 15px 0;
		margin-top: 20px;
		color: white;
		font: normal normal bold 18px/26px Gilroy;
	}

</style>
