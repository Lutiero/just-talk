/** @type {import('./$types').PageLoad} */
export async function load({params}) {
    const myRequest = await fetch(`http://localhost:3000/themes/${params.slug}`,{
        method: 'GET',
        headers: {
            'ContentType': 'application/json'
        }
    });

    const response = await myRequest.json();
    
    return {
      theme: response
    };
  }