import React from 'react';
import { AsyncStorage } from 'react-native'

class Authentication extends React.Component {

  async saveItem(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
  }

  userSignIn() {
    if (!this.props.username || !this.props.password) return;
    fetch('process.env.SERVER_URL' + user, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.props.username,
        password: this.pros.password,
      })
    })
    .then((response) => response.json())
    .then((responseData) => {
      await this.saveItem('username', responseData.username)
      return { success : true }
    })
  }

}

export default Authentication;