
import { createStackNavigator } from 'react-navigation-stack';

import Logout from '../components/Logout';
import Login from '../components/Login';

const AppNavigator = createStackNavigator(
	{
		Login: Login,
		Signup: Login
	},
	{
		initialRouteName: 'Login'
	}
);