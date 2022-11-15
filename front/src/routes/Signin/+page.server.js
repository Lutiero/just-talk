/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({ request, cookies }) => {
		const data = await request.formData();
		const user = Object.fromEntries(data);

		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		let myRequest = await fetch(`http://localhost:3000/users/signin`, {
			method: 'POST',
			headers: myHeaders,
			body: JSON.stringify(user)
		});

		const response = await myRequest.json();
		
		if(response.error) {
			return { success: false}
		} else {
			cookies.set('token', response.token);
			return { success: true}
		}
	}
};
