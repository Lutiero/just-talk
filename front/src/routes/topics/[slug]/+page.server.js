/** @type {import('./$types').PageServerLoad} */
export const load = async ({ cookies, params }) => {
	const myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');
	myHeaders.append('token', cookies.get('token'));

	const myTopicRequest = fetch(`http://localhost:3000/themes/${params.slug}/topic/`, {
		method: 'GET',
		headers: myHeaders
	});

	const myRepliesRequest = fetch(`http://localhost:3000/themes/${params.slug}/replies`, {
		method: 'GET',
		headers: myHeaders
	});

	const requests = await Promise.all([myTopicRequest, myRepliesRequest]);
	const responses = await Promise.all([requests[0].json(), requests[1].json()]);

	return {
		topic: responses[0],
		replies: responses[1]
	};
};

/** @type {import('./$types').Actions} */
export const actions = {
	addReply: async ({ request, params, cookies }) => {
		const data = await request.formData();
		const body = Object.fromEntries(data);
		// const reply = data.get('content');
		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');
		myHeaders.append('token', cookies.get('token'));

		let myRequest = await fetch(`http://localhost:3000/themes/${params.slug}/replies/`, {
			method: 'POST',
			headers: myHeaders,
			body: JSON.stringify(body)
		});

		return { sucess: true };
	},


};
