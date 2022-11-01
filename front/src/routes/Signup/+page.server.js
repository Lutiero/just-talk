/** @type {import('./$types').Actions} */
export const actions = {
    signup: async ({cookies, request, locals }) => {
      const data = await request.formData();
      const newUser = Object.fromEntries(data)

      console.log('newUser', newUser);
      
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      let myRequest = await fetch(`http://localhost:3000/users/create`,{
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(newUser)
    });

    myRequest = await myRequest.json();
    cookies.set('sessionid', myRequest.token);
    return {sucess: true}
    
  }
      
      
    }
  