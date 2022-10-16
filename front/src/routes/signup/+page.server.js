/** @type {import('./$types').Actions} */
export const actions = {
    signup: async ({request}) => {
      const data = await request.formData();
      const newUser = Object.fromEntries(data)

      console.log(newUser);
      
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      let myRequest = await fetch(`http://localhost:3000/users/signup`,{
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(newUser)
    });

    myRequest = await myRequest.json();
    return {sucess: true}
    
  }
      
      
    }
  