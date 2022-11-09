/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({request, cookies}) => {
      const data = await request.formData();
      const user = Object.fromEntries(data)
   
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      let myRequest = await fetch(`http://localhost:3000/users/signin`,{
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(user)
    });

    console.log('status', myRequest.status);
    if(myRequest.status > 199 || myRequest.status < 300) {
      const response = await myRequest.json();
      cookies.set('token', response.token);
      return {success: true}
    } else {
      
      return {success: false}

    }
      
    
  }
      
      
    }
  