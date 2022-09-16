
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
	let response = await fetch("http://localhost:3000/themes");     
    response = await response.json();
    console.log("Response", response)
    return {
        locations: response
    }
};