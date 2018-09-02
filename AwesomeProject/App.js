import React from 'react';
import Timeline from './src/components/Timeline';
import Header from './src/components/Header';
import { View, Text } from 'react-native';

import Login from './src/components/Login';

export default class HomeScreen extends React.Component {

  render(){
    return(
      <View style={{height: 500}}>
        <Login/>
      </View>
    );
  }
}

//<Timeline/>