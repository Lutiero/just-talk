<script>

    import Chat from "$lib/components/Groups/Chat.svelte";

</script>

<div class="header" id="myHeader">
    <div>
        
    </div>

    <div class="title">
      <h1>Depressão</h1>
      <span>10 pessoas</span>
    </div>
    <div class="buttomTheme">
      <button> <p>+</p> Entrar nesse grupo</button>
    </div>
  </div>
  
  <div>
    
    <Chat />

  </div>
  
  <style>
    
  .header{
    background-image: url("/images/depressao.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 200px;
  }
  .header h1{
    letter-spacing: 1.92px;
    color: #FFFFFF;
    opacity: 1;
    margin: 0px;
    padding-top: 50px;
  }
  .header .title {
    text-align: center;
  }
  .header .title span {
    letter-spacing: 0px;
    color: #F5F5F8;
    opacity: 1;
    padding-bottom: 30px;
  }
  .header button{
    margin-top: 20px;
    text-align: center;
    background: none;
    border: none;
    letter-spacing: 0.32px;
    color: #FAFBFC;
    opacity: 1;
  }
  .header .buttomTheme {
    text-align: center;
  }
  .header p {
    display: inline;
  }
  </style>