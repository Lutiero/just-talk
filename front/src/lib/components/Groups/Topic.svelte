<script>
	export let topic;
</script>

<div class="chat">

		<div class="comments">
            <a href="/topics/{topic.id}">
			<p>{topic.content}</p>
            </a>
		</div>
		<div class="peoplesChat">
			<h5>Dr. Silvia Lima</h5>
		</div>
		
</div>

<style>


	.peoplesChat {
		display: flex;
		padding-left: 15px;
		padding-right: 15px;
	}
	.peoplesChat h5 {
		font-size: 13px;
		margin: 0;
		padding-right: 50px;
	}
	.peoplesChat a {
		font-weight: 400;
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
		margin: 10px 15px;
	}
	

    a {
        color: #343342;
    }

    a:visited {
        color: #343342;
    }
</style>
