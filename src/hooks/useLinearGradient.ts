import {useMemo, useRef} from 'react';
import type {ViewStyle} from '../components/View';
import type {ViewStyle as ViewStyleRN} from 'react-native';
import {LayoutRectangle, StyleSheet} from 'react-native';

export default function useLinearGradient(
	style: ViewStyle | undefined,
	layout: LayoutRectangle | undefined,
) {
	return useMemo(() => {
		if (!Array.isArray(style?.backgroundColor)) {
			return {
				viewStyle: style as ViewStyleRN,
				linearGradientStyle: undefined,
				linearGradientColors: undefined,
			};
		}

		const viewStyle: ViewStyleRN = {
			...style,
			backgroundColor: undefined,
			overflow: 'hidden',
		};
		const linearGradientStyle: ViewStyleRN = {
			position: 'absolute',
			top: 0,
			left: 0,
			width: layout?.width,
			height: layout?.height,
		} as const;
		const linearGradientColors = style.backgroundColor as  // TODO: LinearGradient does not accept ColorValue type
			| (string | number)[]
			| undefined;

		return {viewStyle, linearGradientStyle, linearGradientColors};
	}, [style, layout]);
}
