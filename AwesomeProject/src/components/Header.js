import React from 'react';
import { Text, View } from 'react-native';

export default class Header extends React.Component {
    render(){
        return(
          <View>
            <Text>{this.props.user.name}</Text>
          </View>
        );
      }
}