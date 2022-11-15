import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	addTopic: async ({ request, params, cookies }) => {
		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');
		myHeaders.append('token', cookies.get('token'));
		// myHeaders.append('Authorization', `Bearer ${cookies.get('token')}`);

		const data = await request.formData();
		const body = Object.fromEntries(data);

		let myRequest = await fetch(`http://localhost:3000/themes/${params.slug}/topics`, {
			method: 'POST',
			headers: myHeaders,
			body: JSON.stringify(body)
		});

		return { sucess: true };
	}
};

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ cookies, params }) => {
	const myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');
	myHeaders.append('token', cookies.get('token'));
	// myHeaders.append('Authorization', `Bearer ${cookies.get('token')}`);



	const myThemesRequest = fetch(`http://localhost:3000/themes/${params.slug}`, {
		method: 'GET',
		headers: myHeaders
	});

	const myTopicRequest = fetch(`http://localhost:3000/themes/${params.slug}/topics`, {
		method: 'GET',
		headers: myHeaders
	});

	const requests = await Promise.all([myThemesRequest, myTopicRequest]);
	const responses = await Promise.all([requests[0].json(), requests[1].json()]);

	
		return {
			theme: responses[0],
			topics: responses[1]
		}
};
