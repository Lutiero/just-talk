import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	logout: async ({ cookies }) => {
		
        cookies.delete('token')
		throw redirect(307, '/begin');	
	}
};