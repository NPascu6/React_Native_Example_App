import DetailsScreen from '../Details/DetailsScreen';
import LoginScreen from '../Login/LoginScreen';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

let MainNavigator = createStackNavigator({
    Login: { screen: LoginScreen, navigationOptions: { header: null } },
    Details: { screen: DetailsScreen, navigationOptions: { header: null } }
});

var Navigation  = createAppContainer(MainNavigator)

export default Navigation;