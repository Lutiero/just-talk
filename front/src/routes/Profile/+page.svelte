<script>
	export let data;
</script>

<section>
	<div class="header-profile">
		<a href="/home"><img class="ic_back" src="../icons/ic_back.svg" alt="" /> </a>
		<h2>Perfil</h2>
	</div>
	<div class="container-profile">
		<img src={data.user.imageProfile} alt="imageProfile" />
		<form action="" method="post">
			<div>
				<input type="text" value={data.user.name} />
			</div>
			<div>
				<input type="text" value={data.user.email} />
			</div>
            <p>Alterar senha</p>
            <div>
				<input type="text" value="" placeholder="Senha atual" />
			</div>
            <div>
				<input type="text" value="" placeholder="Nova atual" />
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
		background-color: white;
		border: none;
		border-bottom: 1px solid black;
		padding: 10px;
		width: 90%;
	}

	button {
		margin-top: 15px;
	}

	form {
		width: 100%;
	}

	input[type="text"] {
		font-family: "Gilroy", sans-serif;
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
		justify-content: left;
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
</style>
