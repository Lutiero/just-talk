<script>
	export let data;
</script>

<section>
	<div class="header-profile">
		<img class="ic_back" src="../icons/ic_back.svg" alt="" />
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
		border: 1px solid red;
		margin: 0 auto;
	}
	.ic_back {
		background-color: black;
	}

	.header-profile {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

    .container-profile { 
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid wheat;
    }
</style>
