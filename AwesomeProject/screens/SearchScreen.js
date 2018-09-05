import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class SearchScreen extends React.Component {

    render() {
        return(
            <View style={styles.container}>
                <Text>Marie</Text>
                <Text>Marie</Text>
                <Button title="Back to home" onPress={()=> this.props.navigation.navigate('Home')}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#48BBEC',
    },
})