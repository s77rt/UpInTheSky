import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SCREENS from '../src/SCREENS';
import Home from '../pages/Home';

const RootStack = createNativeStackNavigator({
	screens: {
		[SCREENS.HOME]: {
			screen: Home,
		},
	},
});

export default RootStack;
