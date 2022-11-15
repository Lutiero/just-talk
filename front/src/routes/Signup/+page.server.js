import { invalid } from '@sveltejs/kit';


/** @type {import('./$types').Actions} */
export const actions = {
    signup: async ({cookies, request, locals }) => {
      const data = await request.formData();

      const name = data.get('name');
      const email = data.get('email');
      const password = data.get('password');

      if (!email) {
        return invalid(400, { email, missing: true });
      }


      
      let myRequest = await fetch(`http://localhost:3000/users/create`,{
        method: 'POST',
        body: data
    });

    const response = await myRequest.json();
    cookies.set('token', response.token);
    if(response.error) {
			return { success: false}
		} else {
			return { success: true}
		}
    
  }
      
      
    }
  