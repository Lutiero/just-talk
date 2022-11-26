import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { invalid } from '@sveltejs/kit';


/** @type {import('./$types').PageServerLoad} */
export const load = async ({ cookies }) => {
	const myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');
	myHeaders.append('Authorization', `Bearer ${cookies.get('token')}`);

	let myUserDataRequest = await fetch(`http://localhost:3000/users/getusertofront`, {
		method: 'GET',
		headers: myHeaders
	});

	let userResponse = await myUserDataRequest.json();

	if (userResponse.error) {
		throw redirect(307, '/Signin');
	} else {
		return {
			user: userResponse
		};
	}
};

/** @type {import('./$types').Actions} */
export const actions = {
	updateProfile: async ({ cookies, request, locals }) => {
		const data = await request.formData();

		const name = data.get('name');
		const email = data.get('email');
		const password = data.get('password');
		const newpassword = data.get('newpassword');

		console.log(data);

		const myHeaders = new Headers();
		myHeaders.append('Authorization', `Bearer ${cookies.get('token')}`);


		let myRequest = await fetch(`http://localhost:3000/users/update`, {
			method: 'PUT',
			headers: myHeaders,
			body: data
		});

		return { sucess: true };
	}
}
