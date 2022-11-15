import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';



/** @type {import('./$types').PageServerLoad} */
export const load = async ({ cookies }) => {
	const myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');
	myHeaders.append('token', cookies.get('token'));
	// myHeaders.append('Authorization', `Bearer ${cookies.get('token')}`);

	let myRequest = await fetch('http://localhost:3000/themes', {
		method: 'GET',
		headers: myHeaders
	});

	if (myRequest.status > 199 || myRequest.status < 300) {
		const response = await myRequest.json();
		return {
			themes: response
		};
	} else {
		throw redirect(307, '/signin');
	}
};
