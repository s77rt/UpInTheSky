import React, {Children, useMemo} from 'react';
import {ColorValue, Pressable, StyleSheet, ViewStyle} from 'react-native';
import Text from './Text';

type ButtonProps = {
	variant?: 'primary' | 'secondary' | 'danger';
	children?: React.ReactNode;
};

function Button({variant = 'primary', children}: ButtonProps) {
	const style = useMemo<ViewStyle>(
		() => ({
			...styles.base,
			...styles[`variant:${variant}`],
		}),
		[variant],
	);

	const textColor = useMemo<ColorValue>(
		() => (variant === 'secondary' ? 'black' : 'white'),
		[variant],
	);

	return (
		<Pressable style={style}>
			<Text color={textColor} fontWeight="semiBold">
				{children}
			</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	base: {
		borderRadius: 4,
		paddingHorizontal: 36,
		paddingVertical: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	'variant:primary': {
		backgroundColor: 'blue', // TODO: gradiant background
	},
	'variant:secondary': {
		backgroundColor: '#d0e3ff',
	},
	'variant:danger': {
		backgroundColor: '#9d0000',
		borderWidth: 1,
		borderColor: '#ed6b6b',
	},
});

export default React.memo(Button);
