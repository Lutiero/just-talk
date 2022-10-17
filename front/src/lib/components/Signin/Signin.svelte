<div id="login">
	<form action="?/login" method="post" class="card">
		<div class="card-header">
			<a href="#"><img src="icons/ic_back.svg" alt="" /></a>

			<h2>Entrar</h2>

			<p>Informe seu email e senha para entrar</p>
		</div>

		<div class="card-content">
			<div class="card-content-area">
				<label for="email">Email</label>

				<input type="text" name="email" id="email" />
			</div>

			<div class="card-content-area">
				<label for="password">Senha</label>

				<input type="password" name="password" id="password" />
			</div>

			<div class="card-footer">
				<a href="#" class="link">Esqueci minha senha</a>
				<button class="submit">Entrar</button>
			</div>

			<p style="text-align: center;">Ou entre com</p>

			<div class="otherwise">
				<div class="google">
					<img src="images/ic_google.png" alt="" class="google-img" />

					<p class="google-txt">Google</p>
				</div>

				<div class="facebook">
					<img src="images/ic_facebook.png" alt="" class="facebook-img" />

					<p class="facebook-txt">Facebook</p>
				</div>
			</div>
		</div>
		<p>
			Não possui uma conta? <a href="/Signup" class="link">Registre-se</a>
		</p>
	</form>
</div>

<style>
	#login {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}

	.card {
		padding: 40px;
		border-radius: 2px;
		width: 280px;
	}

	.card-header {
		padding-bottom: 50px;
		opacity: 0.8;
		color: #000;
	}

	.card-header::after {
		content: '';
		width: 70px;
		height: 1px;
		background-color: #fff;
		display: block;
		margin-top: -17px;
		margin-left: -5px;
	}

	.card-content label {
		color: #000;
		font-size: 16px;
		opacity: 0.8;
	}

	.card-content-area {
		display: flex;
		flex-direction: column;
		padding: 10px 0;
	}

	.card-content-area input {
		margin-top: 10px;
		padding: 0 5px;
		background-color: transparent;
		border: none;
		border-bottom: 1px solid #e1e1e1;
		outline: none;
		color: rgb(58, 56, 56);
	}

	.card-footer {
		display: flex;
		flex-direction: column;
	}

	.card-footer .submit {
		width: 100%;
		height: 40px;
		background-color: #3ab4d1;
		color: #e1e1e1;
		margin: 10px 0;
		box-shadow: 0px 4px 16px #3ab4d152;
		border: 1px solid #2ca8c6;
		border-radius: 8px;
		font-size: 16px;
		text-transform: bold;
		opacity: 1;
	}

	.card-footer a {
		text-align: right;
		font-size: 16px;
		font-weight: 400;
		opacity: 0.8;
		color: #4a4444;
		text-decoration: none;
		margin: 12px;
	}

	.link {
		color: #4a4444;
		font-weight: 400;
	}

	.otherwise {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.facebook {
		color: #bcbcbc;
		font: normal normal bold 16px/23px Gilroy;
		background: #ffffff 0% 0% no-repeat padding-box;
		margin-right: 0px;
		box-shadow: 0px 3px 6px #a7b6c414;
		border: 1px solid #a7b6c4;
		border-radius: 4px;
		padding: 15px;
		margin: 10px;
		width: 40%;
		opacity: 1;
	}

	.google {
		color: #bcbcbc;
		font: normal normal bold 16px/23px Gilroy;
		background: #ffffff 0% 0% no-repeat padding-box;
		margin-left: 0px;
		box-shadow: 0px 3px 6px #a7b6c414;
		border: 1px solid #a7b6c4;
		border-radius: 4px;
		padding: 15px;
		margin: 10px;
		width: 40%;
		opacity: 1;
	}

	.google-img {
		float: left;
		max-width: 64px;
		max-height: 64px;
	}

	.google-txt {
		margin: 0px;
		padding-left: 40px;
	}

	.facebook-txt {
		margin: 0px;
		padding-left: 40px;
	}

	.facebook-img {
		float: left;
		max-width: 64px;
		max-height: 64px;
	}
</style>
