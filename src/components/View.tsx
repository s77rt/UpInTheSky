import React, {useMemo} from 'react';
import {StyleSheet, View as ViewRN} from 'react-native';
import type {ColorValue, ViewProps as ViewPropsRN} from 'react-native';
import type {ViewStyle as ViewStyleRN} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
function View({style: styleProp, children, ...rest}: ViewProps) {
	const [viewStyle, linearGradientStyle, linearGradientColors] =
		useMemo(() => {
			if (!Array.isArray(styleProp?.backgroundColor)) {
				return [styleProp, undefined, undefined];
			}

			const _viewStyle = StyleSheet.compose(styleProp, {
				backgroundColor: undefined,
				borderRadius: undefined,
				alignItems: undefined,
				justifyContent: undefined,
			});
			const _linearGradientStyle = {
				borderRadius: styleProp.borderRadius,
				alignItems: styleProp.alignItems,
				justifyContent: styleProp.justifyContent,
			};
			const _linearGradientColors = styleProp.backgroundColor as  // TODO: LinearGradient does not accept ColorValue type
				| (string | number)[]
				| undefined;

			return [_viewStyle, _linearGradientStyle, _linearGradientColors];
		}, [styleProp]);

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
