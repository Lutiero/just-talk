<script>
	export let themes;
</script>

<div class="title">
	<h4>Destaques</h4>
</div>

<div class="container">
	<div id="carousel" class="slide">
		<div class="carousels">
			<input type="radio" name="btn" id="radio1" />
			<input type="radio" name="btn" id="radio2" />
			<input type="radio" name="btn" id="radio3" />
			<input type="radio" name="btn" id="radio4" />
			<input type="radio" name="btn" id="radio5" />

			{#each themes as theme, i}
				<div class={i == 0 ? 'images first' : 'images'}>
					<img src={theme.largeImage} alt={theme.title} />
					<div class="text">
						<p>{theme.subscribersAmount} pessoas</p>
					</div>
					<div class="text2">
						<p>{theme.title}</p>
					</div>
				</div>
			{/each}
		</div>
		<div class="balls">
			<label class="manual" for="radio1" />
			<label class="manual" for="radio2" />
			<label class="manual" for="radio3" />
			<label class="manual" for="radio4" />
		</div>
	</div>
</div>

<style>
	.title h4 {
		letter-spacing: 0.32px;
		color: #343342;
		text-align: left;
	}
	.text2 {
		padding: 8px 12px;
		position: absolute;
		bottom: 5px;
		width: 100%;
		z-index: 25;
	}
	.text2 p {
		color: #f2f2f2;
		font-size: 25px;
		text-align: center;
		font-weight: bold;
	}
	.text {
		padding: 8px 12px;
		position: absolute;
		bottom: 50px;
		width: 100%;
		z-index: 25;
	}
	.text p {
		color: #f2f2f2;
		font-size: 15px;
		text-align: center;
	}

	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		background: white;
	}

	.slide {
		width: 582px;
		height: 376px;
		overflow: hidden;
		border-radius: 15px;
		transition: all 0.4s;
	}

	.carousels {
		width: 500%;
		height: 100%;
		display: flex;
	}

	.images {
		position: relative;
		width: 20%;
		transition: 0.5s;
	}

	.images img {
		width: 100%;
		height: 100%;
	}

	.manual {
		border: 2px solid #a7b6c4;
		padding: 5px;
		border-radius: 20px;
		cursor: pointer;
	}

	.manual:not(:last-child) {
		margin-right: 15px;
	}

	.manual:hover {
		background: #3ab4d1;
		transition: 0.4s;
		border-radius: 5px;
		width: 10px;
	}

	.balls {
		position: absolute;
		/* bottom: 188px; */
		left: 50%;
		transform: translate(-50%);
		display: flex;
	}

	input {
		display: none;
	}

	#radio1:checked ~ .first {
		margin-left: 0%;
	}

	#radio2:checked ~ .first {
		margin-left: -400px;
	}

	#radio3:checked ~ .first {
		margin-left: -800px;
	}

	#radio4:checked ~ .first {
		margin-left: -1200px;
	}
</style>
