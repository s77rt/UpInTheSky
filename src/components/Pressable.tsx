import React, {useMemo} from 'react';
import {StyleSheet, Pressable as PressableRN} from 'react-native';
import type {PressableProps as PressablePropsRN} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type {ViewStyle} from './View';
import useLinearGradient from '../hooks/useLinearGradient';

export type PressableProps = PressablePropsRN & {
	style?: ViewStyle;
};

/*
 * Regular <Pressable /> only better!
 * Supports linear gradient background
 */
function Pressable({style, children, ...rest}: PressableProps) {
	const {
		viewStyle: pressableStyle,
		linearGradientStyle,
		linearGradientColors,
	} = useLinearGradient(style);
	const shouldUseLinearGradient = !!linearGradientColors;

	if (shouldUseLinearGradient) {
		return (
			<LinearGradient
				style={linearGradientStyle}
				colors={linearGradientColors}>
				<PressableRN style={pressableStyle} {...rest}>
					{children}
				</PressableRN>
			</LinearGradient>
		);
	}

	return (
		<PressableRN style={pressableStyle} {...rest}>
			{children}
		</PressableRN>
	);
}

export default React.memo(Pressable);
