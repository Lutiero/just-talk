import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	addTopic: async ({ request, params, cookies }) => {
		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');
		myHeaders.append('Authorization', `Bearer ${cookies.get('token')}`);

		const data = await request.formData();
		const body = Object.fromEntries(data);

		let myRequest = await fetch(`http://localhost:3000/themes/${params.slug}/topics`, {
			method: 'POST',
			headers: myHeaders,
			body: JSON.stringify(body)
		});

		return { sucess: true };
	},
	addUserThemes: async ({ request, params, cookies, locals }) => {
		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');
		myHeaders.append('Authorization', `Bearer ${cookies.get('token')}`);


		let myRequest = await fetch(`http://localhost:3000/users/addUserThemes/${params.slug}`, {
			method: 'POST',
			headers: myHeaders,
		});

		const response = await myRequest.json()
		//fazer if e usar enhance
		if (response.error) {
			return { success: false }
		} else {
			return { success: true };
		}
	}
};

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ cookies, params }) => {
	const myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');
	myHeaders.append('Authorization', `Bearer ${cookies.get('token')}`);

	const myThemesRequest = fetch(`http://localhost:3000/themes/${params.slug}`, {
		method: 'GET',
		headers: myHeaders
	});

	const myTopicsRequest = fetch(`http://localhost:3000/themes/${params.slug}/topics`, {
		method: 'GET',
		headers: myHeaders
	});

	// const myTopicRequest = fetch(`http://localhost:3000/themes/${params.slug}/topic`, {
	// 	method: 'GET',
	// 	headers: myHeaders
	// });

	let myUserDataRequest = await fetch(`http://localhost:3000/users/getusertofront`, {
		method: 'GET',
		headers: myHeaders,
	});

	let myUserThemeRelations = await fetch(`http://localhost:3000/users//getUserTheme/${params.slug}`, {
		method: 'GET',
		headers: myHeaders,
	});

	const requests = await Promise.all([myThemesRequest, myTopicsRequest, myUserDataRequest, myUserThemeRelations]);
	const responses = await Promise.all([requests[0].json(), requests[1].json(), requests[2].json(), requests[3].json()]);

	if (responses[0].error) {
		throw redirect(307, '/Signin');
	}

	if (responses[3].error) {
		console.log('response 3 error');
		return {
			theme: responses[0],
			topics: responses[1],
			currentUser: responses[2],
			success: false
		}
	} else {
		console.log('response 3 success');
		return {
			theme: responses[0],
			topics: responses[1],
			currentUser: responses[2],
			success: true
		}

	}


};
