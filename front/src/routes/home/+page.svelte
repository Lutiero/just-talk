<script>
	import Navbar from '../../lib/components/navbar/Navbar.svelte';
	import Highlights from '../../lib/components/home/Highlights.svelte';
	import Themes from '../../lib/components/home/Themes.svelte';
	import UserHeader from '../../lib/components/UserHeader/UserHeader.svelte'
	export let data;
</script>


<UserHeader user={data.user} />
<Highlights themes={data.themes} />
<div class="content-subtitle">
	<h4 class="subtitle">Temas</h4>
	<span>
		<a href="/allGroups" class="link"> Ver tudo<img class="icon" src="./icons/ic_arrow.svg" alt="" /></a>
	</span>
</div>
<Themes themes={data.themes} />
<Navbar />

<style>
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

	.link {
		display: flex;
		align-items: center;
		font-weight: 400;
	}

	.link .icon {
		color: #3ab4d1;
	}

	
@media screen and (max-width: 380px) {
	.content-subtitle h4 {
    margin-left: 13px;
  }
}
</style>
