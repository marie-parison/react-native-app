export default class User {

    getUser() {

        fetch(process.env.SERVER_URL + 'user')
        .then((response) => {
          return response.json()
        })
        .then((response) => {
          return [JSON.parse(response)]
        })
        .catch(function(err) {
         console.log(err);
        })
    }
}