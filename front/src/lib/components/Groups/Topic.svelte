<script>
	export let topic;
</script>

<div class="chat">
<div class="person">
	<a href="/themes/{topic.themeId}">	<img src="../icons/ic_backblack.svg" style=""/>
	</a>
	<img src="https://iili.io/sRCMdb.png" alt="Imagem do usuário" />
	<h5>Dr. Silvia Lima</h5> 
</div>
		<div class="comments">
            <a href="/topics/{topic.id}">
			<p>{topic.content}</p>
            </a>
		</div>
		<div class="viewsCount">
			<h5>{topic.repliesAmount} respostas</h5>
		</div>
		
</div>

<style>
	.person img{
		height: 24px;
		width: 24px;
	}
	.person{
		display: flex;
		align-items: center;
		gap: 10px;
		padding-left: 15px;
		background-color: white;
		margin-bottom: -20px;
		color: #A7B6C4;
	}
	.viewsCount{
		display: flex;
		justify-content: space-evenly;
		color: #A7B6C4;
	}
	.chat {
		background-color: #fafbfc;
		padding-top: 1px;
	}
	.chat ::placeholder {
		color: #343342;
	}

	.comments {
		border: 1px solid #ffffff;
		background-color: white;
		border-radius: 5px;
		padding: 10px;
	}
	

	.comments a {
        color: #343342;
		font-weight: 300;
    }

    a:visited {
        color: #343342;
    }
</style>
