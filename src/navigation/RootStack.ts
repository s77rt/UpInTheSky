import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SCREENS from '../SCREENS';
import Home from '../pages/Home';

const RootStack = createNativeStackNavigator({
	screens: {
		[SCREENS.HOME]: {
			screen: Home,
		},
	},
	screenOptions: {headerShown: false},
});

export default RootStack;
