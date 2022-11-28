<script>
	import Themes from '../../lib/components/home/Themes.svelte';
	export let data;
</script>

<div class="header">
	<a href="/home"><img class="ic_back" src="../icons/ic_back.svg" alt="" /></a>
</div>

<Themes themes={data.themes} />

<style>
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 10px;
		margin-bottom: 10px;
	}

    .ic_back {
		width: 40px;
		background-color: rgb(48, 42, 42);
		border-radius: 50%;
	}
</style>
