import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';
import Timeline from '../components/Timeline';


export default class HomeScreen extends React.Component {
  
  render(){
    return(
      <View style={{height: 500}}>
        <Text>Home</Text>
      </View>
    );
  }
}