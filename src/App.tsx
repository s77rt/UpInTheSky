import {createStaticNavigation, DefaultTheme} from '@react-navigation/native';
import RootStack from './navigation/RootStack';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Navigation = createStaticNavigation(RootStack);
const Theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: '#001537',
	},
};

function App() {
	return (
		<SafeAreaProvider>
			<StatusBar barStyle="light-content" backgroundColor="#001537" />
			<Navigation theme={Theme} />
		</SafeAreaProvider>
	);
}

export default App;
