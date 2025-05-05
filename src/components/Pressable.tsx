import React, {useCallback, useState} from 'react';
import {Pressable as PressableRN} from 'react-native';
import type {
	LayoutChangeEvent,
	LayoutRectangle,
	PressableProps as PressablePropsRN,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type {ViewStyle} from './View';
import useLinearGradient from '../hooks/useLinearGradient';

export type PressableProps = Omit<PressablePropsRN, 'style'> & {
	style?: ViewStyle;
};

/*
 * Regular <Pressable /> only better!
 * Supports linear gradient background
 */
function Pressable({
	style,
	children,
	onLayout: onLayoutProp,
	...rest
}: PressableProps) {
	const [layout, setLayout] = useState<LayoutRectangle>();
	const {
		viewStyle: pressableStyle,
		linearGradientStyle,
		linearGradientColors,
	} = useLinearGradient(style, layout);

	const onLayout = useCallback(
		(event: LayoutChangeEvent) => {
			setLayout(event.nativeEvent.layout);
			onLayoutProp?.(event);
		},
		[onLayoutProp],
	);

	return (
		<PressableRN onLayout={onLayout} style={pressableStyle} {...rest}>
			<>
				{!!linearGradientColors && (
					<LinearGradient
						style={linearGradientStyle}
						colors={linearGradientColors}
					/>
				)}
				{children}
			</>
		</PressableRN>
	);
}

export default React.memo(Pressable);
