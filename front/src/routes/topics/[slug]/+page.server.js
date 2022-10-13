/** @type {import('./$types').Actions} */
export const actions = {
  add: async ({request, params}) => {
    const data = await request.formData();
    const body = Object.fromEntries(data);
    // const reply = data.get('content');
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let myRequest = await fetch(`http://localhost:3000/topics/${params.slug}/replies`,{
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body)
    });

    myRequest = await myRequest.json();
    return {sucess: true}
    
  }
}