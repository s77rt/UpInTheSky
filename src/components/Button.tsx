import React, {ReactElement, useMemo} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import type {ViewStyle} from 'react-native';
import type {TextProps} from './Text';
import type {IconProps} from './Icon';

type ButtonProps = {
	style?: ViewStyle;
	text?: ReactElement<TextProps>;
	icon?: ReactElement<IconProps>;
};

function Button({style: styleProp, text, icon}: ButtonProps) {
	const style = useMemo<ViewStyle>(
		() => ({
			...styles.button,
			...styleProp,
		}),
		[styleProp],
	);

	return (
		<Pressable style={style}>
			{icon}
			{text}
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
