/** @type {import('./$types').Actions} */
export const actions = {
	buscaGrupos: async ({ cookies, request, locals }) => {
		const data = await request.formData();
		const query = Object.fromEntries(data);
		const myHeaders = new Headers();
		myHeaders.append('Authorization', `Bearer ${cookies.get('token')}`);
		myHeaders.append('Content-Type', 'application/json');


		let themesOfUser = await fetch('http://localhost:3000/groups/findGroup', {
			method: 'POST',
			headers: myHeaders,
			body: JSON.stringify(query)
		});

		const themesOfUserResponse = await themesOfUser.json();
		console.log('themesOfUserResponse', themesOfUserResponse.themesOfUser.Theme);

		return {
			response: themesOfUserResponse.themesOfUser
		};

	}
}
