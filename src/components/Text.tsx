import React, {useMemo} from 'react';
import {StyleSheet, Text as TextRN} from 'react-native';
import type {ColorValue, TextStyle} from 'react-native';

type TextProps = {
	color?: ColorValue;
	fontSize?: number;
	fontWeight?: 'normal' | 'semiBold' | 'bold';
	children?: React.ReactNode;
};

function Text({
	color = 'white',
	fontSize = 12,
	fontWeight = 'normal',
	children,
}: TextProps) {
	const style = useMemo<TextStyle>(
		() => ({
			color,
			fontSize,
			...styles[`fontWeight:${fontWeight}`],
		}),
		[color, fontWeight],
	);

	return <TextRN style={style}>{children}</TextRN>;
}

const styles = StyleSheet.create({
	'fontWeight:normal': {
		fontFamily: 'Montserrat-Regular',
		fontWeight: 400,
		fontStyle: 'normal',
	},
	'fontWeight:semiBold': {
		fontFamily: 'Montserrat-SemiBold',
		fontWeight: 600,
		fontStyle: 'normal',
	},
	'fontWeight:bold': {
		fontFamily: 'Montserrat-Bold',
		fontWeight: 700,
		fontStyle: 'normal',
	},
});

export default React.memo(Text);
