import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {ViewProps} from './View';

type PageWrapperProps = ViewProps;

function PageWrapper({style: styleProp, children, ...rest}: PageWrapperProps) {
	const insets = useSafeAreaInsets();
	const style = useMemo(
		() =>
			StyleSheet.compose(
				{
					paddingTop: insets.top,
					paddingBottom: insets.bottom,
					paddingLeft: insets.left,
					paddingRight: insets.right,
				},
				styleProp,
			),
		[styleProp],
	);

	return (
		<View style={style} {...rest}>
			{children}
		</View>
	);
}

export default React.memo(PageWrapper);
