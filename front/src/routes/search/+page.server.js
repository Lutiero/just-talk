import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';



/** @type {import('./$types').PageServerLoad} */
export const load = async ({ cookies }) => {
	const myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');
	myHeaders.append('Authorization', `Bearer ${cookies.get('token')}`);

	let myThemesRequest = await fetch('http://localhost:3000/themes', {
		method: 'GET',
		headers: myHeaders
	});


	let myUserDataRequest = await fetch(`http://localhost:3000/users/getusertofront`, {
		method: 'GET',
		headers: myHeaders,
	});
	
	let themeResponse = await myThemesRequest.json();
	let userResponse = await myUserDataRequest.json();

	

	if(themeResponse.error) {
		throw redirect(307, '/Signin');
	} else {
		return {
			themes: themeResponse,
			user: userResponse
		}
	}
};
