<script>
</script>


<div class="groups">
    <div class="head">
      <a href="./home"><img src="icons/ic_black.svg"/></a>
      <input placeholder="Buscar por grupos">
    </div>
    <div class="container-image">
	<ul class="image-list">
			<li>
				<div class="image">
					<a href="themes/1">
						<img src="images/sonos.png" alt="ola" />
					</a>
					<span class="image-title"
						> Ola <span class="image-descrition"> 10 pessoas</span>
					</span>
				</div>
			</li>
			<li>
				<div class="image">
					<a href="themes/1">
						<img src="images/sonos.png" alt="ola" />
					</a>
					<span class="image-title"
						> Ola <span class="image-descrition"> 10 pessoas</span>
					</span>
				</div>
			</li>
			<li>
				<div class="image">
					<a href="themes/1">
						<img src="images/sonos.png" alt="ola" />
					</a>
					<span class="image-title"
						> Ola <span class="image-descrition"> 10 pessoas</span>
					</span>
				</div>
			</li>
	</ul>
</div>
</div>
<style>
	.head{
		padding-top: 10px;
		padding-bottom: 40px;
		position: relative;
	}
	.head input{
		position: absolute;
		top: 0px;
		left: 40px;
		width: 100%;
	}
	.head img{
		position: absolute;
		top: -3px;
    left: 10px;

	}
	.groups input {
		border: none;
		background-color: white;
	}
	.image-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 16px;
	}
	.image {
		position: relative;
	}
	.image img{
		height: 240px;
		width: 175px;
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