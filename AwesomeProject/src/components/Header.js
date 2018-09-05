import React from 'react';
import { Text, View, Image } from 'react-native';

export default class Header extends React.Component {

    constructor(props){
      super(props);
    }

    render(){
        return(
          <View>
            <Text>Marie</Text>
          </View>
        );
      }
}

// import { DrawerActions } from 'react-navigation';


// <Button title="Drawer" onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
// </Button>,