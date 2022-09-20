
import { error } from '@sveltejs/kit';

/** @type {import('../../../../.svelte-kit/types/src/routes/themes/$types').PageLoad} */
export const load = async () => {
	let response = await fetch(`http://localhost:3000/themes${params.slug}`)    
    response = await response.json();
    console.log("Response", response)
    return {
        themes: response,
    }
};