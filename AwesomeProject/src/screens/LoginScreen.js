import React from 'react';
import { View, Image, Text, TextInput, TouchableHighlight, StyleSheet, ActivityIndicator } from 'react-native';
import { userSignIn } from '../utils/Authentification';

export default class LoginScreen extends React.Component {

    constructor(props){
        super(props)
        this.state = { onProgress: false }
    }

    onPressLogin(){

        // if (!this.state.username || !this.state.password) {
        //     this.setState({error : "Champs manquants"})
        //     return;
        // }

        this.setState({ onProgress: true })

        userSignIn(this.state.username, this.state.password, (result) => {
            this.setState({ onProgress: false })
            if(result.success){
                this.props.navigation.navigate('Home')
            } else {
                this.setState(result);
            }       
        });
        
    }

    render(){

        //TODO Refactoring des erreurs
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