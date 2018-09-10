import React from 'react';
import { Text, View, Image, AsyncStorage } from 'react-native';

export default class Header extends React.Component {

    constructor(props){
      super(props);
      this.state = {profile_image_url: false};
    }

    componentWillMount(){
      AsyncStorage.getItem('profile_image_url')
      .then((response) => {
        this.setState({profile_image_url: response});
      })
    }

    render(){
      let image = <View/>
      if(this.state.profile_image_url){
          image = <Image source={{uri: this.state.profile_image_url}} style={{width: 40, height: 40}}/>
      }

        return(
          <View>
            <Text>Marie</Text>
            { image }
          </View>
        );
      }
}

// import { DrawerActions } from 'react-navigation';


// <Button title="Drawer" onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
// </Button>,