<script>
  
</script>
<div class="recover">
  <a href="./Signin"><img
    src="../icons/ic_black.svg"
  /></a>

  <h1>Recuperar senha</h1>
  <span>Informe seu email para enviarmos sua nova senha.</span>
  <form>
		<div class="form-group">
			<input class="input" name="name" type="text" placeholder="Digite seu e-mail" />
		</div>
	</form>
  <a href="/home"><button class="buttoncreate">Criar nova conta</button></a>

</div>

<style>
  input {
		background-color: white;
	}
  input::placeholder {
		font: normal normal normal 16px/22px Gilroy;
		color: #a7b6c4;
	}
  .recover input {
		border: none;
		border-bottom: 2px solid #3ab4d1;
		width: 100%;
		box-shadow: none;
    margin-top: 60px;
    margin-bottom: 90px;
	}
	.recover .buttoncreate {
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
  .recover h1{
    font: normal normal bold 32px/46px Gilroy;
    letter-spacing: 0px;
    color: #343342;
    padding-top: 40px;
  }
  .recover span{
    font: normal normal normal 16px/22px Gilroy;
		color: #a7b6c4;
  }

</style>