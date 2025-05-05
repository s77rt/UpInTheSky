import {StyleSheet} from 'react-native';
import PrimaryButton from '../components/Button/PrimaryButton';
import DangerButton from '../components/Button/DangerButton';
import SecondaryButton from '../components/Button/SecondaryButton';
import PageWrapper from '../components/PageWrapper';
import type {StaticScreenProps} from '@react-navigation/native';
import {
	FigmaIcon,
	FileDownloadZipIcon,
	FolderMoveIcon,
	ImageCodeIcon,
	SparklesIcon,
	TrashCanIcon,
} from '../components/Icon/Icons';

type ShowroomProps = StaticScreenProps<undefined>;

function Showroom(_props: ShowroomProps) {
	return (
		<PageWrapper style={styles.container}>
			<PrimaryButton text="BUTTON" />
			<PrimaryButton
				text="Download ZIP file of component"
				icon={FileDownloadZipIcon}
			/>
			<PrimaryButton text="BUTTON" icon={SparklesIcon} isHovered />
			<DangerButton text="Delete" icon={TrashCanIcon} />
			<SecondaryButton text="Open in Figma" icon={FigmaIcon} />
			<SecondaryButton text="Move Component" icon={FolderMoveIcon} />
			<SecondaryButton
				text="Move Component"
				icon={FolderMoveIcon}
				isHovered
			/>
			<SecondaryButton text="Instant Preview" icon={ImageCodeIcon} />
		</PageWrapper>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		gap: 8,
		marginVertical: 24,
	},
});

export default Showroom;
