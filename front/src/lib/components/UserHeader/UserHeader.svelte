<script>
	export let user;
</script>

<nav>
	<div class="greetings">
		<span>Bem vindo(a)</span>
		<h2>{user.name}</h2>
	</div>
	<img src={user.imageProfile} alt="avatar" />
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	img {
		width: 40px;
		height: 40px;
	}

    h2 {
        color: black;
        margin: 0;
    }

    .greetings {
        color: #C1C3C7;
    }
</style>
