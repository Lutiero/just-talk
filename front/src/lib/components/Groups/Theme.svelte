<script>
	export let theme;
</script>

<div class="header" id="myHeader" style="background-image: url('{theme.largeImage}')">
	<div />

	<div class="title">
		<div class="return">
			<a href="/home">
				<img
					src="../icons/ic_back.svg"
				/>
			</a>
		</div>
		<h1>{theme.title}</h1>
		<span>{theme.subscribersAmount} pessoa(s)</span>
	</div>
	<div class="buttomTheme">
		<button>
			<p>+</p>
			 Entrar nesse grupo</button
		>
	</div>
</div>

<style>
	.return {
		text-align: left;
		position: absolute;
		top: 50px;
		left: 50px;
	}
	.title {
		position: relative;
	}
	#myHeader {
		background-repeat: no-repeat;
		background-size: cover;
		height: 250px;
		margin: -15px;
	}
	.header h1 {
		letter-spacing: 1.92px;
		color: #ffffff;
		opacity: 1;
		margin: 0px;
		padding-top: 110px;
		font-size: 24px;
	}
	#myHeader .title {
		text-align: center;
	}
	#myHeader .title span {
		letter-spacing: 0px;
		color: #f5f5f8;
		opacity: 1;
		padding-bottom: 30px;
		font-size: 13px;
	}
	#myHeader button {
		margin-top: 30px;
		text-align: center;
		background: none;
		border: none;
		letter-spacing: 0.32px;
		color: #fafbfc;
		opacity: 1;
	}
	#myHeader .buttomTheme {
		text-align: center;
	}
	#myHeader p {
		display: inline;
	}
</style>
