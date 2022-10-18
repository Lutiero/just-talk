/** @type {import('./$types').Actions} */
export const actions = {
  addTopic: async ({request, params}) => {

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const data = await request.formData();
    const body = Object.fromEntries(data);

    let myRequest = await fetch(`http://localhost:3000/topics/${params.slug}/topics`,{
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body)
    });

    myRequest = await myRequest.json();
    return {sucess: true}
    
  }
}