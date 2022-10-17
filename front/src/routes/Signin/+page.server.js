/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({request}) => {
      const data = await request.formData();
      const user = Object.fromEntries(data)

      console.log(user);
      
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      let myRequest = await fetch(`http://localhost:3000/users/signin`,{
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(user)
    });

    myRequest = await myRequest.json();
    return {sucess: true}
    
  }
      
      
    }
  