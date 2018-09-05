import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { DrawerActions } from 'react-navigation';
import { getStatusBarHeight } from 'react-native-status-bar-height';

class DrawerScreen extends Component {

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('Home')}>
                Home
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('Profile')}>
                Profile
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

DrawerScreen.propTypes = {
  navigation: PropTypes.object
};

export default DrawerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: getStatusBarHeight(),
    },
    heading: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    menuItem:{
        width: 300,
        padding: 10,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    }
});
