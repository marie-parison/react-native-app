import { createStackNavigator } from 'react-navigation';

const Routes = createStackNavigator({
  Home: { screen: HomeScreen },
  Timeline: { screen: TimelineScreen },
});

export default Routes;