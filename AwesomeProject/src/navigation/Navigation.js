import React from 'react';
import { createStackNavigator, createDrawerNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import { Dimensions, Image, AsyncStorage } from 'react-native';

import Header from '../components/Header';
import User from '../data/User'

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import DrawerScreen from '../screens/DrawerScreen';

const TabNavigator = createBottomTabNavigator(
  { Home: HomeScreen }
);

TabNavigator.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];

  return {
    headerTitle: routeName,
    //headerLeft: <Image source={{uri : AsyncStorage.getItem('profile_image_url')}}/>,
  };
};

const HeaderNavigator = createStackNavigator(
  { Home: TabNavigator }
);

const DrawerNavigator = createDrawerNavigator(
  { Home: HeaderNavigator },
  {
    initialRouteName: 'Home',
    contentComponent: DrawerScreen,
    drawerWidth: Dimensions.get('window').width * 0.8,
  }
);

const StackNavigator = createStackNavigator(
  { Home: DrawerNavigator },
  { headerMode: 'none', }
);

const SwitchNavigator = createSwitchNavigator(
  {
    Login: LoginScreen,
    App: StackNavigator,
  },
  { initialRouteName: 'Login', }
);

export default SwitchNavigator;