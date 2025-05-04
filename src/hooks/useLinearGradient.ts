import {useMemo, useRef} from 'react';
import type {ViewStyle} from '../components/View';
import {StyleSheet} from 'react-native';

export default function useLinearGradient(style: ViewStyle | undefined) {
	return useMemo(() => {
		if (!Array.isArray(style?.backgroundColor)) {
			return {
				viewStyle: style,
				linearGradientStyle: undefined,
				linearGradientColors: undefined,
			};
		}

		const viewStyle = StyleSheet.compose(style, {
			backgroundColor: undefined,
		});
		const linearGradientStyle = {
			borderRadius: style.borderRadius,
			alignItems: style.alignItems,
			justifyContent: style.justifyContent,
		};
		const linearGradientColors = style.backgroundColor as  // TODO: LinearGradient does not accept ColorValue type
			| (string | number)[]
			| undefined;

		return {viewStyle, linearGradientStyle, linearGradientColors};
	}, [style]);
}
