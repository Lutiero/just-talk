<script>
	import Navbar from '../../lib/components/navbar/Navbar.svelte';
	import Highlights from '../../lib/components/home/Highlights.svelte';
	import Themes from '../../lib/components/home/Themes.svelte';
	export let data;
</script>

<Highlights themes={data.themes} />
<Themes themes={data.themes} />
<Navbar />
