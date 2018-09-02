import React from 'react';
import Timeline from './src/components/Timeline';
import Header from './src/components/Header';
import { View } from 'react-native';

export default class TimelineScreen extends React.Component {

  render(){
    return(
      <View style={{height: 500}}>
        <Timeline/>
      </View>
    );
  }
}