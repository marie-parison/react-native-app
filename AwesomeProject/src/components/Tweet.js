import React from 'react';
import { View, StyleSheet, Text, Image, Linking } from 'react-native';

export default class Tweet extends React.Component {

    constructor(props){
        super(props)
    }

    componentWillMount(){
        if(this.props.user){
            this.props.user = <Text style={styles.list_text}>{this.props.user}</Text>
        }
    }

    render(){
        return(
            <View style={styles.tweet}>
                <Image style={styles.avatar} source={{uri: "http://placekitten.com/200/200"}}/>
                <View style={styles.content}>
                    <View style={styles.list}>
                        {this.props.user}
                        <Text style={styles.list_text}>[username]</Text>
                        <Text style={styles.list_text}>[timestamp]</Text>
                    </View>
                    <Text style={styles.content_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam ipsum, finibus ac est sed, vestibulum condimentum neque. Sed eget iaculis.</Text>
                    <Image style={styles.image} source={{uri: "http://placekitten.com/500/400"}}/>
                    <View style={styles.list}>
                        <Text style={styles.list_text}>Reply</Text>
                        <Text style={styles.list_text}>Retweet</Text>
                        <Text style={styles.list_text}>Heart</Text>
                    </View>
                </View>
            </View>
        );
    }
}

//TODO style à améliorer
const styles = StyleSheet.create({
    tweet: {
        flexDirection : 'row',
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#e6ecf0',
    },
    content: {
        marginLeft: 5,
        flexGrow: 1, // corrige le bug avec flex wrap
        flex: 1,
    },
    avatar:{
        height: 45,
        width: 45,
        borderRadius: 22,
    },
    list: {
        flexDirection : 'row',
    },
    list_text:{
        fontSize: 14,
        color: "#292f33",
        marginRight: 5,
    },
    content_text: {
        fontSize: 14,
        color: "#b1bbc3",
    },
    image: {
        width: 250,
        height: 200,
        borderRadius: 5,
    }
})
