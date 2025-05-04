import {createStaticNavigation} from '@react-navigation/native';
import RootStack from './navigation/RootStack';

const Navigation = createStaticNavigation(RootStack);

function App() {
	return <Navigation />;
}

export default App;
