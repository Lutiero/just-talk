<script></script>

<nav>
	<div class="nav-container">
		<a href="/home"> <img class="icon-home" src="./icons/ic_home.svg" alt="" /></a>
		<a href="/Mygroups"><img class="icon-chat" src="./icons/ic_chat.png" alt="icon-chat" /></a>

		<a href="/menu"><img class="icon-more" src="./icons/ic_more.svg" alt="" /></a>
	</div>
</nav>

<style>
	.nav-container {
		display: flex;
		justify-content: space-around;
		align-items: center;
		gap: 10px;
		position: fixed;
		/* FIXME: Preciso remover os tamanhos, mas deixar em 100 da largura */
		width: 400px;
		height: 60px;
		bottom: 0;
		background-color: rgb(255, 255, 255);
		box-shadow: 0px 4px 16px #3ab4d152;
	}

	img {
		cursor: pointer;
	}

	.icon-chat {
		width: 80px;
		height: 80px;
	}

	.icon-chat:hover {
		width: 60px;
		height: 60px;
	}

	.chat-rounded {
		cursor: pointer;
		width: 44px;
		height: 44px;
		background: transparent linear-gradient(130deg, #3ab4d1 0%, #2596b1 100%) 0% 0% no-repeat
			padding-box;
		box-shadow: 0px 4px 16px #3ab4d152;
		border: 1px solid #2ca8c6;
		border-radius: 50%;
	}

	.chat-rounded:hover {
		box-shadow: 0px 4px 16px #050c6352;
	}
</style>
