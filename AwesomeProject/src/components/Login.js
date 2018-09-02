import React from 'react';
import { View, Image, Text, TextInput, TouchableHighlight, StyleSheet, ActivityIndicator } from 'react-native';

export default class Login extends React.Component {

    constructor(props){
        super(props)
        this.state = { onProgress: false }
    }

    onPressLogin(){

        //TODO Vérifier que le username et le password existent
        this.setState({ onProgress: true })

        fetch(process.env.SERVER_URL + 'user')
        .then((response) => {
          if(response.status != "200"){
            return response.json()
          } else {
            throw 'Une erreur est survenue, veuillez ressayer'
          }
        })
        .then((response) => {
            
        })
        .catch((err) => {
            this.setState({error : err})
            console.log(err);
        })
        .finally(() => {
            this.setState({ onProgress: false })
        })
    }

    // TODO Message d'erreur

    render(){

        //TODO refactoring erreurs
        let errorMessage = <View style={styles.hidden}/>
        if(this.state.error){
            errorMessage = <Text style={styles.errors}>{this.state.error}</Text>
            setTimeout(() => {
                this.setState({error : false})
            }, 2000);
        }

        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={{uri: 'http://www.reactnativeexpress.com/logo.png'}}/>
                <TextInput
                    style={styles.textInput}
                    placeholder="Username"
                    onChangeText={text => this.setState({username : text})}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    onChangeText={text => this.setState({password : text})}
                />
                <TouchableHighlight style={styles.button} onPress={this.onPressLogin.bind(this)}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableHighlight>
                <ActivityIndicator style={styles.loader} animating={this.state.onProgress}/>
                {errorMessage}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 40,
        padding: 20,
    },
    logo: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    textInput: {
        height: 40,
        marginTop: 10,
        padding: 5,
        borderWidth: 1,
        alignSelf: 'stretch',
    },
    button: {
        height: 40,
        marginTop: 10,
        backgroundColor: '#48BBEC',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FFF',
        alignSelf: 'center',
    },
    loader: {
        marginTop: 20,
    },
    errors: {
        color: 'red',
    },
    hidden:{
        display: 'none',
    }
})