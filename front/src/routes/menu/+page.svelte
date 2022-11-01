<script>
	import Navbar from '../../lib/components/navbar/Navbar.svelte';
</script>
<div class="menu">
  <h1>Mais opções</h1>  
  <div class="menu_button">
    <a href="http://127.0.0.1:5173/Terms">    <img src="icons/ic_terms.svg" alt="" class="google-img" />
      Termos de uso</a>
  </div>
  <div class="menu_button">
    <a href="http://127.0.0.1:5173/Policies">    <img src="icons/ic_privacy.svg" alt="" class="google-img" />
      Políticas de Privacidade</a>
  </div>
  <div class="menu_button">
    <a href="http://127.0.0.1:5173/begin">    <img src="icons/ic_out.svg" alt="" class="google-img" />
      Sair</a>
  </div>
  <Navbar />
</div>

<style>
  .menu{
    background-color: #FAFBFC 0% 0% no-repeat padding-box;
    text-align: center;
    width: 100%;
  }
  .menu h1{
    text-align: center;
    font: normal normal bold 1rem/1.1rem Gilroy;
    letter-spacing: 0px;
    color: #343342;
  }
  .menu .menu_button a{
    text-align: left;
    font: normal normal normal 1rem/1.1rem Gilroy-Medium;
    letter-spacing: 0px;
    color: #292929;
    width: 100%;
    display:inline-block;
  }
  .menu .menu_button {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #A7B6C4;
    margin-top: 1rem;
    width: 100%;
    padding: 5px 0px 5px 0px;
}

  
</style>