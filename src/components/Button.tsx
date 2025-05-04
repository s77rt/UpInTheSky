import React, {useMemo} from 'react';
import {Pressable, StyleSheet, ViewStyle} from 'react-native';
import Text from './Text';

type ButtonProps = {};

function Button({}: ButtonProps) {
	const style = useMemo<ViewStyle>(
		() => ({
			...styles.base,
		}),
		[],
	);

	return (
		<Pressable style={style}>
			<Text fontWeight="semiBold">BUTTON</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	base: {
		borderRadius: 4,
		paddingHorizontal: 36,
		paddingVertical: 8,
		backgroundColor: 'blue',
		alignItems: 'center',
	},
});

export default React.memo(Button);
