import DetailsScreen from '../Details/detailsScreen';
import LoginScreen from '../Login/loginScreen';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

let MainNavigator = createStackNavigator({
    Login: { screen: LoginScreen, navigationOptions: { header: null } },
    Details: { screen: DetailsScreen, navigationOptions: { header: null } }
});

var Navigation  = createAppContainer(MainNavigator)

export default Navigation;