import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SCREENS from '../SCREENS';
import Home from '../pages/Home';
import Showroom from '../pages/Showroom';
import type {StaticParamList} from '@react-navigation/native';

const RootStack = createNativeStackNavigator({
	screens: {
		[SCREENS.HOME]: {
			screen: Home,
		},
		[SCREENS.SHOWROOM]: {
			screen: Showroom,
		},
	},
	screenOptions: {headerShown: false},
});

export type RootStackParamList = StaticParamList<typeof RootStack>;

export default RootStack;
