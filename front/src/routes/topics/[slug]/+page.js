/** @type {import('./$types').PageLoad} */
export async function load({params}) {

    
    const myTopicRequest = fetch(`http://localhost:3000/topics/${params.slug}`, {
      method: 'GET',
      headers: {
        'ContentType': 'application/json'
      }
    });
    
        
    const requests = await Promise.all([myTopicRequest])
    const responses = await Promise.all([requests[0].json()]);
  
    return {
      topic: responses[0],
    };
  }

