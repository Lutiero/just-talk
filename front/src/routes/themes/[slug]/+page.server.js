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

		const userId = fetch(`http://localhost:3000/token`, {
			body: cookies.get('token')
		});

		const myBody = {
			userId: userId,
			themeId: params.slug
		};

		let myRequest = await fetch(`http://localhost:3000/users/addUserThemes`, {
			method: 'POST',
			headers: myHeaders,
			body: JSON.stringify(myBody)
		});

		return { sucess: true };
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

	const requests = await Promise.all([myThemesRequest, myTopicsRequest, myUserDataRequest]);
	const responses = await Promise.all([requests[0].json(), requests[1].json(), requests[2].json()]);

	if(responses[0].error) {
		throw redirect(307, '/Signin');
	}
	return {
		theme: responses[0],
		topics: responses[1],
		currentUser: responses[2]
	}

};
