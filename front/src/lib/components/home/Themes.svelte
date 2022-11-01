<script>
	export let themes;
</script>

<div class="content-subtitle">
	<h4 class="subtitle">Temas</h4>
	<span>
		<a href="http://127.0.0.1:5173/Mygroups" class="link"> Ver tudo<img class="icon" src="./icons/ic_arrow.svg" alt="" /></a>
	</span>
</div>

<div class="container-image">
	<ul class="image-list">
		{#each themes as theme}
			<li>
				<div class="image">
					<a href="themes/{theme.id}">
						<img src={theme.smallImage} alt={theme.title} />
					</a>
					<span class="image-title"
						>{theme.title} <span class="image-descrition">{theme.subscribersAmount} pessoas</span>
					</span>
				</div>
			</li>
		{/each}
	</ul>
</div>

<style>
	.subtitle {
		letter-spacing: 0.32px;
		color: #343342;
	}

	.content-subtitle {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 32px;
	}

	.icon {
		width: 16px;
		height: 16px;
	}

	.image-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 16px;
	}

	.link {
		display: flex;
		align-items: center;
		font-weight: 400;
	}

	.link .icon {
		color: #3ab4d1;
	}

	.image {
		position: relative;
	}

	.image-title {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 60%;
		left: 10%;
		color: #ffffff;
		font-weight: 600;
	}

	.image-descrition {
		font-weight: 300;
	}

	.container-image {
		padding-bottom: 40px;
	}

	ul li img {
		box-shadow: 0px 0px 6px #a7b6c43d;
		border-radius: 4px;
		cursor: pointer;
	}
</style>
