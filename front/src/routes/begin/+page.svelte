<div class="begin">
	<h1>Just Talk</h1>
	<p>
		Não desafie seus problemas sozinho(a), converse com pessoas ou profissionais que já passaram por
		algo parecido.
	</p>
</div>
<div class="register">
	<span>Entrar ou criar conta</span>
	<a href="http://127.0.0.1:5173/Signup"> <button class="buttoncreate">Vamos começar?</button> </a>
	<div class="otherwise">
		<div class="google">
			<img src="images/ic_google.png" alt="" class="google-img" />
			<p class="google-txt">Google</p>
		</div>
		<div class="facebook">
			<img src="images/ic_facebook.png" alt="" class="facebook-img" />
			<p class="facebook-txt">Facebook</p>
		</div>
	</div>
	<a href="http://127.0.0.1:5173/Signin">Já possuo conta</a>
</div>

<style>
	.register a {
		font: normal normal bold 16px/22px Gilroy;
		letter-spacing: 0px;
		color: #3ab4d1;
	}

	.register {
		text-align: center;
	}

	.register span {
		font: normal normal normal 16px/22px Gilroy;
		letter-spacing: 0px;
		color: #bcbcbc;
	}

	.register .buttoncreate {
		background: transparent linear-gradient(100deg, #3ab4d1 0%, #2596b1 100%) 0% 0% no-repeat
			padding-box;
		box-shadow: 0px 4px 16px #3ab4d152;
		border: 1px solid #2ca8c6;
		border-radius: 8px;
		width: 100%;
		padding: 15px 0 15px 0;
		margin-top: 20px;
		color: white;
		font: normal normal bold 18px/26px Gilroy;
	}

	.begin {
		text-align: center;
		padding: 0px 15px 0px 15px;
		background-size: cover !important;
		height: 500px;
		background: transparent url('icons/begin.svg') 0% 0% no-repeat padding-box;
	}

	.begin h1 {
		padding-top: 50px;
		font: normal normal 800 57px/82px Gilroy;
		letter-spacing: 2.85px;
		color: #fafbfc;
		opacity: 0.65;
		margin-bottom: -10px;
	}

	.begin p {
		font: normal normal normal 16px/22px Gilroy;
		letter-spacing: 0px;
		color: #fafbfc;
		opacity: 1;
	}

	.otherwise {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.facebook {
		background: #ffffff 0% 0% no-repeat padding-box;
		box-shadow: 0px 3px 6px #a7b6c414;
		border: 1px solid #a7b6c4;
		border-radius: 4px;
		padding: 15px;
		margin: 10px;
		width: 40%;
		opacity: 1;
		color: #bcbcbc;
		font: normal normal bold 16px/23px Gilroy;
		margin-right: 0px;
	}

	.google {
		background: #ffffff 0% 0% no-repeat padding-box;
		box-shadow: 0px 3px 6px #a7b6c414;
		border: 1px solid #a7b6c4;
		border-radius: 4px;
		padding: 15px;
		margin: 10px;
		width: 40%;
		opacity: 1;
		color: #bcbcbc;
		font: normal normal bold 16px/23px Gilroy;
		margin-left: 0px;
	}

	.google-img {
		float: left;
		max-width: 64px;
		max-height: 64px;
	}

	.google-txt {
		margin: 0px;
		padding-left: 40px;
	}

	.facebook-txt {
		margin: 0px;
		padding-left: 40px;
	}

	.facebook-img {
		float: left;
		max-width: 64px;
		max-height: 64px;
	}
</style>
