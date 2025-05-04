import {View} from 'react-native';
import Button from '../components/Button';

function Home() {
	return (
		<View
			style={{
				paddingHorizontal: 20,
				paddingVertical: 100,
				flexDirection: 'row',
				gap: 8,
				flexWrap: 'wrap',
				backgroundColor: '#001537',
				flex: 1,
			}}>
			<Button>BUTTON</Button>
			<Button variant="secondary">Open in Figma</Button>
			<Button variant="danger">Delete</Button>
			<Button>Move Component</Button>
		</View>
	);
}

export default Home;
