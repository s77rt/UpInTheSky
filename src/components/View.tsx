import React, {useCallback, useState} from 'react';
import {View as ViewRN} from 'react-native';
import type {
	ColorValue,
	LayoutChangeEvent,
	LayoutRectangle,
	ViewProps as ViewPropsRN,
} from 'react-native';
import type {ViewStyle as ViewStyleRN} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import useLinearGradient from '../hooks/useLinearGradient';

export type ViewStyle = Omit<ViewStyleRN, 'backgroundColor'> & {
	backgroundColor?: ColorValue | ColorValue[];
};

export type ViewProps = Omit<ViewPropsRN, 'styile'> & {
	style?: ViewStyle;
};

/*
 * Regular <View /> only better!
 * Supports linear gradient background
 */
function View({style, children, onLayout: onLayoutProp, ...rest}: ViewProps) {
	const [layout, setLayout] = useState<LayoutRectangle>();
	const {viewStyle, linearGradientStyle, linearGradientColors} =
		useLinearGradient(style, layout);

	const onLayout = useCallback(
		(event: LayoutChangeEvent) => {
			setLayout(event.nativeEvent.layout);
			onLayoutProp?.(event);
		},
		[onLayoutProp],
	);

	return (
		<ViewRN onLayout={onLayout} style={viewStyle} {...rest}>
			<>
				{!!linearGradientColors && (
					<LinearGradient
						style={linearGradientStyle}
						colors={linearGradientColors}
					/>
				)}
				{children}
			</>
		</ViewRN>
	);
}

export default React.memo(View);
