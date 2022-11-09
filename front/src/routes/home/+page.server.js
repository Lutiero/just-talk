
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ cookies }) => {

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('token', cookies.get('token'));


	let response = await fetch("http://localhost:3000/themes", {
        method: 'GET',
        headers: myHeaders
    });     
    response = await response.json();
    return {
        themes: response,
    }
};