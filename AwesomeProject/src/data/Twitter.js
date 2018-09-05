export async function getTweets() {

    try {
      let response = await fetch(
        'http://10.41.173.225:5000/tweets'
      );
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
}