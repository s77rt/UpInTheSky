import {StyleSheet, View} from 'react-native';
import Text from '../components/Text';
import PrimaryButton from '../components/Button/PrimaryButton';
import DangerButton from '../components/Button/DangerButton';
import SecondaryButton from '../components/Button/SecondaryButton';
import PageWrapper from '../components/PageWrapper';
import BaseButton from '../components/Button/BaseButton';
import type {StaticScreenProps} from '@react-navigation/native';

type ShowroomProps = StaticScreenProps<undefined>;

function Showroom(_props: ShowroomProps) {
	return <PageWrapper style={styles.container}></PageWrapper>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		gap: 32,
	},
});

export default Showroom;
