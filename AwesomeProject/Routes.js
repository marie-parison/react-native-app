import React, { Component } from 'react';
import {createStackNavigator, createDrawerNavigator, createBottomTabNavigator} from 'react-navigation';
import { DrawerActions } from 'react-navigation';
import {View,Text,StyleSheet,Platform,TouchableOpacity,Image,StatusBar, Button} from 'react-native';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';
import DrawerScreen from './screens/DrawerScreen';

const Tabs = createBottomTabNavigator({
  Home: HomeScreen,
  Profile: ProfileScreen,
});

const DrawerNavigator = createDrawerNavigator({
  Home:{
      screen: Tabs
  }
},{
  initialRouteName: 'Home',
  contentComponent: DrawerScreen,
  drawerWidth: 250
});

const MenuImage = ({navigation}) => {
  if(!navigation.state.isDrawerOpen){
      return <Image source={{uri: 'http://www.reactnativeexpress.com/logo.png'}}/>
  }else{
      return <Image source={{uri: 'http://www.reactnativeexpress.com/logo.png'}}/>
  }
}

const StackNavigator = createStackNavigator({
  
  //important: key and screen name (i.e. DrawerNavigator) should be same while using the drawer navigator inside stack navigator.
  
  DrawerNavigator:{
      screen: DrawerNavigator
  }
},{
  navigationOptions: ({ navigation }) => ({
      title: 'ReactNavigation',  // Title to appear in status bar
      headerLeft: 
      <Button title="Drawer" onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
      </Button>,
      headerTitleStyle: {
        fontWeight: 'bold',
      },

  })
});

export default StackNavigator;