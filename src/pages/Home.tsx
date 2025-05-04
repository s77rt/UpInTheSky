import {View} from 'react-native';
import Button from '../components/Button';
import Icon from '../components/Icon';
import {TrashCanIcon} from '../components/Icon/Icons';
import Text from '../components/Text';

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
				style={{
					backgroundColor: '#9d0000',
					borderWidth: 1,
					borderColor: '#ed6b6b',
				}}
				text={
					<Text style={{color: 'white', fontWeight: 'bold'}}>
						Delete
					</Text>
				}
				icon={<Icon src={TrashCanIcon} />}
			/>
			<Button color="#d0e3ff" textStyle={{fontWeight: 'bold'}}>
				Move Component
			</Button>
		</View>
	);
}

export default Home;
