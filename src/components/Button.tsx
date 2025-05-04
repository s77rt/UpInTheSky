import React, {useMemo} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import type {ColorValue, TextStyle, ViewStyle} from 'react-native';
import Text from './Text';

type ButtonProps = {
	color?: ColorValue;
	style?: ViewStyle;
	textColor?: ColorValue;
	textStyle?: TextStyle;
	children?: React.ReactNode;
};

function Button({
	color = 'blue', // TODO: gradiant background
	style: styleProp,
	textColor,
	textStyle: textStyleProp,
	children,
}: ButtonProps) {
	const style = useMemo<ViewStyle>(
		() => ({
			...styles.button,
			backgroundColor: color,
			...styleProp,
		}),
		[color],
	);

	const textStyle = useMemo<TextStyle>(
		() => ({color: textColor, ...textStyleProp}),
		[textColor],
	);

	return (
		<Pressable style={style}>
			<Text style={textStyle}>{children}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 4,
		paddingHorizontal: 36,
		paddingVertical: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default React.memo(Button);
