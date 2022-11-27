<script>
	export let user;
</script>

<nav>
	<div class="greetings">
		<span>Bem vindo(a)</span>
		<h2>{user.name}</h2>
	</div>
	<a href="/Profile">
		<img src={user.imageProfile} alt="avatar" />
	</a>
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
		color: #c1c3c7;
	}
	@media screen and (max-width: 380px) {
	.greetings {
    margin-left: 13px;
  }
}
@media screen and (max-width: 380px) {
	nav img {
    margin-right: 13px;
  }
}
</style>
