import React, {useMemo} from 'react';
import {StyleSheet, View as ViewRN} from 'react-native';
import type {ColorValue, ViewProps as ViewPropsRN} from 'react-native';
import type {ViewStyle as ViewStyleRN} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import useLinearGradient from '../hooks/useLinearGradient';

export type ViewStyle = ViewStyleRN & {
	backgroundColor?: ColorValue | ColorValue[];
};

export type ViewProps = ViewPropsRN & {
	style?: ViewStyle;
};

/*
 * Regular <View /> only better!
 * Supports linear gradient background
 */
function View({style, children, ...rest}: ViewProps) {
	const {viewStyle, linearGradientStyle, linearGradientColors} =
		useLinearGradient(style);
	const shouldUseLinearGradient = !!linearGradientColors;

	if (shouldUseLinearGradient) {
		return (
			<LinearGradient
				style={linearGradientStyle}
				colors={linearGradientColors}>
				<ViewRN style={viewStyle} {...rest}>
					{children}
				</ViewRN>
			</LinearGradient>
		);
	}

	return (
		<ViewRN style={viewStyle} {...rest}>
			{children}
		</ViewRN>
	);
}

export default React.memo(View);
