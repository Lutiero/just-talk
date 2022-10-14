/** @type {import('./$types').Actions} */
export const actions = {
  addReply: async ({request, params}) => {
    const data = await request.formData();
    const body = Object.fromEntries(data);
    // const reply = data.get('content');
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let myRequest = await fetch(`http://localhost:3000/replies/${params.slug}`,{
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body)
    });

    myRequest = await myRequest.json();
    return {sucess: true}
    
  },

  addTopic: async ({request, params}) => {
    console.log('aaaaaaquiiii');
  
    // const myHeaders = new Headers();
    // myHeaders.append('Content-Type', 'application/json');

    // let myRequest = await fetch(`http://localhost:3000/replies/${params.slug}`,{
    //     method: 'POST',
    //     headers: myHeaders,
    //     body: JSON.stringify(body)
    // });

    // myRequest = await myRequest.json();
    return {sucess: true}
    
  }
}