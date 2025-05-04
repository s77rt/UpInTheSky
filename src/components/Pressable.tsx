import React, {useMemo} from 'react';
import {StyleSheet, Pressable as PressableRN} from 'react-native';
import type {PressableProps as PressablePropsRN} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type {ViewStyle} from './View';
import useLinearGradient from '../hooks/useLinearGradient';
import View from './View';

export type PressableProps = Omit<PressablePropsRN, 'styile'> & {
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

	return (
		<LinearGradient
			style={linearGradientStyle}
			colors={linearGradientColors ?? ['#FFFFFF00', '#FFFFFF00']}>
			<PressableRN style={pressableStyle} {...rest}>
				{children}
			</PressableRN>
		</LinearGradient>
	);
}

export default React.memo(Pressable);
