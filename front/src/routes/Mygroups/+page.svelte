<script>
  import Themes from '../../lib/components/home/Themes.svelte';

</script>
<div class="groups">
<div class="head">
  <a href="./home"><img src="icons/ic_black.svg"/></a>
  <h3>Grupos</h3>
  <a href="./search"><img src="icons/ic_search.svg"/></a>
</div>

<div class="mygroups">
  <div class="content-subtitle">
    <h4 class="subtitle">Seus Grupos</h4>
    <span>
      <a href="http://127.0.0.1:5173/Mygroups" class="link"> Ver tudo<img class="icon" src="./icons/ic_arrow.svg" alt="" /></a>
    </span>
  </div>
  <div class="container-image">
    <ul class="image-list">
        <li>
          <div class="image">
            <a href="themes/2">
              <img src="images/sonos.png" />
            </a>
            <span class="image-title"
              >oi <span class="image-descrition">10 pessoas</span>
            </span>
          </div>
        </li>
        <li>
          <div class="image">
            <a href="themes/2">
              <img src="images/sonos.png" />
            </a>
            <span class="image-title"
              >oi <span class="image-descrition">10 pessoas</span>
            </span>
          </div>
        </li>
        <li>
          <div class="image">
            <a href="themes/2">
              <img src="images/sonos.png" />
            </a>
            <span class="image-title"
              >oi <span class="image-descrition">10 pessoas</span>
            </span>
          </div>
        </li>
    </ul>
  </div>
</div>
<h4>10 profissionais online</h4>
<div class="professionals">
    <div class="item">
      <img src="images/doug.png"/>
      <span class="caption">Dr. Lucas Correia</span>
    </div>
    <div class="item">
      <img src="images/doug.png"/>
      <span class="caption">Dr. Lucas Correia</span>
    </div>
    <div class="item">
      <img src="images/doug.png"/>
      <span class="caption">Dr. Lucas Correia</span>
    </div>
    <div class="item">
      <img src="images/doug.png"/>
      <span class="caption">Dr. Lucas Correia</span>
    </div>
    <div class="item">
      <img src="images/doug.png"/>
      <span class="caption">Dr. Lucas Correia</span>
    </div>
    <div class="item">
      <img src="images/doug.png"/>
      <span class="caption">Dr. Lucas Correia</span>
    </div>
    <div class="item">
      <img src="images/doug.png"/>
      <span class="caption">Dr. Lucas Correia</span>
    </div>
    <div class="item">
      <img src="images/doug.png"/>
      <span class="caption">Dr. Lucas Correia</span>
    </div>
    <div class="item">
      <img src="images/doug.png"/>
      <span class="caption">Dr. Lucas Correia</span>
    </div>
    <div class="item">
      <img src="images/doug.png"/>
      <span class="caption">Dr. Lucas Correia</span>
    </div>
    
</div>
<div class="answers">
  <h4>Últimas respostas</h4>
    <div class="persons">
      <div class="imgperson">
        <img src="images/doug.png"/>
      </div>
      <div class="textperson">
        <h5>(Sono) Dr. Silva Lima</h5>
        <span>Lorem ipsum dolor sit amet conse...</span>
      </div>
      <div class="time">
        <p>10 Horas atrás</p>
      </div>
    </div>
</div>
</div>

<style>
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
  .image-title {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60%;
  left: 10%;
  color: #ffffff;
  font-weight: 600;
}
.image-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}
.image-list .image {
  position: relative;
}
.image img{
  height: 180px;
  width: 150px;
}
.item{
  vertical-align: top;
  display: inline-block;
  text-align: center;
  width: 56px;

}
.item span{
  text-align: center;
  letter-spacing: 0px;
  color: #343342;
  opacity: 1;
  line-height: initial;
  font-size: 13px;
  font-family: Gilroy;
  font-weight: 700;
}
.caption{
  display: block;
}
.groups h4{
  text-align: left;
  font: normal normal medium 16px/22px Gilroy !important;
  letter-spacing: 0.32px;
  color: #343342;
  opacity: 1;
}
.head{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
}
.head h3{
  font: normal normal bold 16px/23px Gilroy;
  letter-spacing: 0px;
  color: #343342;
  opacity: 1;
}
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
.professionals{
  white-space:nowrap;
  overflow-x:auto;

}
.professionals img {
  height: 48px;
  width: 48px;
  
}
.persons{
  display: flex;
}
.persons img{
  height: 48px;
  width: 48px;
}
.imgperson{
  display: block;
  width: 15%;
}
.textperson{
  display: block;
  width: 65%;
}
.textperson h5{
  margin: 0px;
}
.time{
  width: 20%;

}
.time p{
  text-align: center;
  font: normal normal bold 10px/14px Gilroy;
  letter-spacing: 0px;
  color: #A7B6C4;
  opacity: 1;
}
</style>