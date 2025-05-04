import {View} from 'react-native';
import Button from '../components/Button';
import Icon from '../components/Icon';
import {TrashCanIcon} from '../components/Icon/Icons';

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
			<Button textColor="white" textStyle={{fontWeight: 'semibold'}}>
				BUTTON
			</Button>
			<Button color="#d0e3ff" textStyle={{fontWeight: 'bold'}}>
				Open in Figma
			</Button>
			<Button
				color="#9d0000"
				textColor="white"
				textStyle={{fontWeight: 'bold'}}
				style={{borderWidth: 1, borderColor: '#ed6b6b'}}
				icon={<Icon src={TrashCanIcon} />}>
				Delete
			</Button>
			<Button color="#d0e3ff" textStyle={{fontWeight: 'bold'}}>
				Move Component
			</Button>
		</View>
	);
}

export default Home;
