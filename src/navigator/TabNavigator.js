
import { createStackNavigator } from 'react-navigation-stack';

import Logout from '../components/Logout';
import Login from '../components/Login';

export default createStackNavigator({
	Home: Logout
}, {
	initialRouteName: 'Home',
});