import React, {ReactElement, useMemo} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import type {ColorValue, TextStyle, ViewStyle} from 'react-native';
import Text from './Text';
import Icon, {IconProps} from './Icon';
import {TrashCanIcon} from './Icon/Icons';

type ButtonProps = {
	color?: ColorValue;
	style?: ViewStyle;
	textColor?: ColorValue;
	textStyle?: TextStyle;
	icon?: ReactElement<IconProps>;
	children?: React.ReactNode;
};

function Button({
	color = 'blue', // TODO: gradiant background
	style: styleProp,
	textColor,
	textStyle: textStyleProp,
	icon,
	children,
}: ButtonProps) {
	const style = useMemo<ViewStyle>(
		() => ({
			...styles.button,
			backgroundColor: color,
			...styleProp,
		}),
		[color, styleProp],
	);

	const textStyle = useMemo<TextStyle>(
		() => ({color: textColor, ...textStyleProp}),
		[textColor, textStyleProp],
	);

	return (
		<Pressable style={style}>
			{icon}
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
		flexDirection: 'row',
		gap: 4,
	},
});

export default React.memo(Button);
