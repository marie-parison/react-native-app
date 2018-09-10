import React from 'react';
import { View, StyleSheet } from 'react-native';
import Timeline from '../components/Timeline';


export default class HomeScreen extends React.Component {
  
  render(){
    return(
      <View style={styles.container}>
        <Timeline/>
      </View>
    );
  }
}

//TODO Height ? 
const styles = StyleSheet.create({
  container:{
    backgroundColor: '#E6ECF0',
    height:1000,
  }
});