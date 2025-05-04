import React, {ReactElement, useMemo} from 'react';
import {StyleSheet} from 'react-native';
import type {ViewStyle} from '../View';
import Pressable from '../Pressable';
import type {BaseButtonProps} from './types';

function BaseButton({style: styleProp, text, icon, ...rest}: BaseButtonProps) {
	const style = useMemo<ViewStyle>(
		() => ({
			...styles.button,
			...styleProp,
		}),
		[styleProp],
	);

	return (
		<Pressable style={style} {...rest}>
			{icon}
			{text}
		</Pressable>
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

export default React.memo(BaseButton);
