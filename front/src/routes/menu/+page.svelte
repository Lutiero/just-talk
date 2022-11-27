<script>
	import Navbar from '../../lib/components/navbar/Navbar.svelte';
</script>
<div class="menu">
  <h1>Mais opções</h1>  
  <div class="menu_button">
    <a href="/Terms">   
    <img src="icons/ic_terms.svg" alt="" class="google-img" />
      Termos de uso</a>
  </div>
  <div class="menu_button">
    <a href="/Policies">    <img src="icons/ic_privacy.svg" alt="" class="google-img" />
      Políticas de Privacidade</a>
  </div>
  <form 
  action="?/logout"
  method="POST" 
  class="menu_button"
  >
  <div class="logout">
    <img src="icons/ic_privacy.svg" alt="" class="google-img" />
    <button>
      Sair
    </button>
  </div>

  </form>
  <Navbar />
</div>

<style>

  .menu{
    min-width: 350px;
  }
  .logout{
    position: relative;
  }
  .logout button{
    border: none;
    background-color: white;
    color: black;
  }
  .logout img{
    position: relative;
    top: 7px !important;
    left: 10px !important;
  }
  .menu_button img {
    position: relative;
    top: 5px;
    left: -10px;
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
    padding-left: 21px;
  }
  .menu .menu_button {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #A7B6C4;
    margin-top: 1rem;
    width: 100%;
    padding: 5px 0px 5px 0px;
    position: relative;
}

@media screen and (max-width: 320px) {
  .nav-container{
  min-width: 320px;
}
}
@media screen and (max-width: 350px) {
  .menu {
    min-width: 275px;
  }
}
  
</style>