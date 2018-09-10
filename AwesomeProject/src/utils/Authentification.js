import { AsyncStorage } from 'react-native'

async function saveItem(item, selectedValue) { // async retourne forcement une promise
  try {
      return await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      throw "Une erreur est survenue, veuillez ressayer";
    }
}

//TODO vérifier pourquoi il y a redirection meme quand le serveur n'est pas lancé
export function userSignIn(username, password, callback, errorcb) {
    
  return (
    fetch(process.env.SERVER_URL + 'user')
    .then((response) => {
      if(response.status == 200){
        return response.json()
      } else {
        throw "Une erreur est survenue, veuillez ressayer";
      }
    })
    .then(async (result) => {
      try {
        await saveItem('profile_image_url', result.profile_image_url)
        callback();
      } catch (err) {
        errorcb({error : "Une erreur est survenue, veuillez ressayer"});
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