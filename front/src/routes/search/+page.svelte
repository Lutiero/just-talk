<script>
  export let themes;
</script>


<div class="groups">
    <div class="head">
      <a href="./home"><img src="icons/ic_black.svg"/></a>
      <input>
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
</div>
<style>
	.image-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 16px;
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