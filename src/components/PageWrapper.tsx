import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {ViewProps} from './View';
import PrimaryButton from './Button/PrimaryButton';
import {ArrowLeftIcon} from './Icon/Icons';
import {useNavigation} from '@react-navigation/native';

type PageWrapperProps = ViewProps;

function PageWrapper({style, children, ...rest}: PageWrapperProps) {
	const navigation = useNavigation();
	const insets = useSafeAreaInsets();

	const containerStyle = useMemo(
		() =>
			StyleSheet.compose(
				{
					paddingTop: insets.top,
					paddingBottom: insets.bottom,
					paddingLeft: insets.left,
					paddingRight: insets.right,
				},
				styles.container,
			),
		[],
	);

	return (
		<View style={containerStyle}>
			<View style={styles.header}>
				{navigation.canGoBack() && (
					<PrimaryButton
						text="Go Back"
						icon={ArrowLeftIcon}
						onPress={navigation.goBack}
					/>
				)}
			</View>
			<View style={style} {...rest}>
				{children}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		flexDirection: 'row',
		paddingHorizontal: 24,
		paddingVertical: 4,
	},
});

export default React.memo(PageWrapper);
