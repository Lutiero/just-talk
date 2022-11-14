/** @type {import('./$types').Actions} */
export const actions = {
    signup: async ({cookies, request, locals }) => {
      const data = await request.formData();
      
      
      const myHeaders = new Headers();
      
      let myRequest = await fetch(`http://localhost:3000/users/create`,{
        method: 'POST',
        body: data
    });

    const response = await myRequest.json();
    cookies.set('token', response.token);
    return { success: true }
    
  }
      
      
    }
  