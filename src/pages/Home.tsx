import {StyleSheet, View} from 'react-native';
import Text from '../components/Text';
import PrimaryButton from '../components/Button/PrimaryButton';
import DangerButton from '../components/Button/DangerButton';
import SecondaryButton from '../components/Button/SecondaryButton';
import PageWrapper from '../components/PageWrapper';
import BaseButton from '../components/Button/BaseButton';
import {useNavigation} from '@react-navigation/native';
import type {StaticScreenProps} from '@react-navigation/native';

type HomeProps = StaticScreenProps<undefined>;

function Home(_props: HomeProps) {
	const navigation = useNavigation();

	const navigateToShowroom = () => {
		navigation.navigate('Showroom');
	};

	return (
		<PageWrapper style={styles.container}>
			<Text style={styles.title}>UpInTheSky</Text>
			<View style={styles.list}>
				<PrimaryButton
					text="Primary Button"
					onPress={navigateToShowroom}
				/>
				<SecondaryButton
					text="Secondary Button"
					onPress={navigateToShowroom}
				/>
				<DangerButton
					text="Danger Button"
					onPress={navigateToShowroom}
				/>
				<BaseButton
					style={styles.figmaButton}
					text={
						<Text style={styles.figmaButtonText}>Figma Design</Text>
					}
					onPress={navigateToShowroom}
				/>
			</View>
		</PageWrapper>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		gap: 32,
	},
	list: {
		gap: 16,
	},
	title: {
		fontSize: 32,
		color: 'white',
	},

	// @ts-expect-error
	// Missing types for array backgroundColor
	figmaButton: {backgroundColor: ['red', 'yellow']},
	figmaButtonText: {fontSize: 20, fontWeight: 'black'},
});

export default Home;
