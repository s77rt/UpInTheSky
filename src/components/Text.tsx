import React, {useMemo} from 'react';
import {StyleSheet, Text as TextRN} from 'react-native';
import type {TextProps, TextStyle} from 'react-native';
import {getDefaultTextStyle} from '../libs/StyleUtils';

// Regular <Text /> but with custom default style
function Text({style: styleProp, children, ...rest}: TextProps) {
	const style = useMemo(() => {
		const flattenedStyleProp = StyleSheet.flatten(styleProp) as
			| TextStyle
			| undefined; // Flattened style could be undefined due to a bug: https://github.com/facebook/react-native/issues/46293
		return StyleSheet.compose(
			getDefaultTextStyle(
				flattenedStyleProp?.fontWeight,
				flattenedStyleProp?.fontStyle,
			),
			styleProp,
		);
	}, [styleProp]);

	return (
		<TextRN style={style} {...rest}>
			{children}
		</TextRN>
	);
}

export default React.memo(Text);
