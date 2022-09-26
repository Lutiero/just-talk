/** @type {import('./$types').PageLoad} */
export async function load({params}) {
    const myThemesRequest = await fetch(`http://localhost:3000/themes/${params.slug}`,{
        method: 'GET',
        headers: {
            'ContentType': 'application/json'
        }
    });

    const themeResponse = await myThemesRequest.json();

    const myTopicRequest = await fetch(`http://localhost:3000/themes/${params.slug}/topics`, {
      method: 'GET',
      headers: {
        'ContentType': 'application/json'
      }
    });

    const topicResponse = await myTopicRequest.json();

    const myRepliesRequest = await fetch(`http://localhost:3000/themes/${params.slug}/topics/replies`, {
      method: 'GET',
      headers: {
        'ContentType': 'application/json'
      }
    });

    const repliesResponse = await myRepliesRequest.json();
    
    return {
      theme: themeResponse,
      topics: topicResponse,
      replies: repliesResponse
    };
  }

