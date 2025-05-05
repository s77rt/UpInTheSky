import {View} from 'react-native';
import Button from '../components/Button/BaseButton';
import Icon from '../components/Icon';
import {FigmaIcon, SparklesIcon, TrashCanIcon} from '../components/Icon/Icons';
import Text from '../components/Text';
import PrimaryButton from '../components/Button/PrimaryButton';
import DangerButton from '../components/Button/DangerButton';
import SecondaryButton from '../components/Button/SecondaryButton';

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
			<Button
				style={{
					backgroundColor: ['#2246ee', '#2b7fff'],
				}}
				text={
					<Text style={{color: 'white', fontWeight: 'semibold'}}>
						BUTTON
					</Text>
				}
			/>
			<Button color="#d0e3ff" textStyle={{fontWeight: 'bold'}}>
				Open in Figma
			</Button>
			<PrimaryButton text="aaeza" icon={SparklesIcon} />
			<PrimaryButton text="aaeza" icon={SparklesIcon} isHovered />
			<PrimaryButton text="aaeza" icon={SparklesIcon} isPressed />
			<DangerButton text="Delete" icon={TrashCanIcon} />
			<SecondaryButton text="Figma" icon={FigmaIcon} />
			<Button
				style={{
					backgroundColor: '#9d0000',
					outlineColor: 'white',
					outlineWidth: 1,
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
