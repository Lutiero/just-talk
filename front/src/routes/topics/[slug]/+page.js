/** @type {import('./$types').PageLoad} */
export async function load({params}) {

    
    const myTopicRequest = fetch(`http://localhost:3000/topics/${params.slug}`, {
      method: 'GET',
      headers: {
        'ContentType': 'application/json'
      }
    });

    const myRepliesRequest = fetch(`http://localhost:3000/topics/${params.slug}/replies`, {
      method: 'GET',
      headers: {
        'ContentType': 'application/json'
      }
    });
    
        
    const requests = await Promise.all([myTopicRequest, myRepliesRequest])
    const responses = await Promise.all([requests[0].json(),requests[1].json() ]);
  
    return {
      topic: responses[0],
      replies: responses[1]
    };
  }

