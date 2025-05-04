import React, {ReactElement, useMemo} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import type {TextProps} from './Text';
import type {IconProps} from './Icon';
import LinearGradient from 'react-native-linear-gradient';
import View, {ViewStyle} from './View';

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
		<View style={style}>
			{icon}
			{text}
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		paddingHorizontal: 36,
		paddingVertical: 8,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		gap: 4,
		borderRadius: 4,
	},
});

export default React.memo(Button);
