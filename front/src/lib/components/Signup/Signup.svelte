<div>
	<p>Registre-se</p>

	<form action="?/signup" method="POST">
		<div class="form-group">
			<label for="name">Nome</label>
			<input name="name" type="text" placeholder="Digite seu nome completo..." />
		</div>
		<div class="form-group">
			<label for="email">Email</label>
			<input name="email" type="email" placeholder="Digite seu email..." />
		</div>
		<div class="form-group">
			<label for="password">Password</label>
			<input name="password" type="password" placeholder="Digite sua senha..." />
		</div>
		<div class="form-group btn">
			<button>Criar nova conta</button>
		</div>
	</form>
</div>

<style>
	input {
		background-color: white;
		color: black;
		padding: 10px 15px;
		border-radius: 4px;
	}

	.form-group {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		gap: 5px;
	}

	.form-group.btn {
		align-items: center;
		padding-top: 5px;
	}
</style>
