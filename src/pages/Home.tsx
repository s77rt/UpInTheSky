import {StyleSheet, View} from 'react-native';
import Icon from '../components/Icon';
import {FigmaIcon, SparklesIcon, TrashCanIcon} from '../components/Icon/Icons';
import Text from '../components/Text';
import PrimaryButton from '../components/Button/PrimaryButton';
import DangerButton from '../components/Button/DangerButton';
import SecondaryButton from '../components/Button/SecondaryButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PageWrapper from '../components/PageWrapper';
import BaseButton from '../components/Button/BaseButton';

function Home() {
	return (
		<PageWrapper style={styles.container}>
			<Text style={styles.title}>UpInTheSky</Text>
			<View style={styles.list}>
				<PrimaryButton text="Primary Button" />
				<SecondaryButton text="Secondary Button" />
				<DangerButton text="Danger Button" />
				<BaseButton
					style={styles.figmaButton}
					text={
						<Text style={styles.figmaButtonText}>Figma Design</Text>
					}
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
