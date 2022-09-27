/** @type {import('./$types').PageLoad} */
export async function load({params}) {
    const myThemesRequest = fetch(`http://localhost:3000/themes/${params.slug}`,{
        method: 'GET',
        headers: {
            'ContentType': 'application/json'
        }
    });

    
    const myTopicRequest = fetch(`http://localhost:3000/themes/${params.slug}/topics`, {
      method: 'GET',
      headers: {
        'ContentType': 'application/json'
      }
    });
    
    
    const myRepliesRequest = fetch(`http://localhost:3000/themes/${params.slug}/topics/replies`, {
      method: 'GET',
      headers: {
        'ContentType': 'application/json'
      }
    });
    
    const requests = await Promise.all([myThemesRequest, myTopicRequest, myRepliesRequest])
    const responses = await Promise.all([requests[0].json(), requests[1].json(), requests[2].json()]);
    
    return {
      theme: responses[0],
      topics: responses[1],
      replies: responses[2]
    };
  }

