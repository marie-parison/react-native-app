import { AsyncStorage } from 'react-native'

//TODO gérer les autres cas d'erreurs
async function saveItem(item, selectedValue) {
    try {
      return await AsyncStorage.setItem(item, selectedValue).toPromise();
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
  }

export function userSignIn(username, password, callback) {
    
  return (
    fetch(process.env.SERVER_URL + 'user')
    .then((response) => { 
      if(response.status == "200"){
        response.json()
      } else {
        throw "Une erreur est survenue, veuillez ressayer";
      }
    })
    .then((result) => {
      try {
        saveItem('user', result.name)
        .then(() => {
          callback({success : true });
        })
      } catch (err) {
        callback({error : "Une erreur est survenue, veuillez ressayer"});
      }
    })
    .catch((err)  => {
      callback({error : err});
    })
  );
}

// , {
//   method: 'POST',
//   headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     username: username,
//     password: password,
//   })
// }