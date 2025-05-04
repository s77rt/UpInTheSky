import React, {useMemo, useState} from 'react';
import {StyleSheet} from 'react-native';
import type {ViewStyle} from '../View';
import type {Button} from './types';
import BaseButton from './BaseButton';
import Text from '../Text';
import Icon from '../Icon';

function PrimaryButton({style: styleProp, text, icon, ...rest}: Button) {
	const style = useMemo<ViewStyle>(
		() => ({
			...styles.button,
			...styleProp,
		}),
		[styleProp],
	);

	return (
		<BaseButton
			style={style}
			text={text ? <Text style={styles.text}>{text}</Text> : undefined}
			icon={icon ? <Icon src={icon} /> : undefined}
			{...rest}
		/>
	);
}

// TODO: Use proper style type instead of "any"
const styles = StyleSheet.create<any>({
	button: {
		backgroundColor: ['#2246ee', '#2b7fff'],
	},
	text: {
		color: 'white',
		fontWeight: 'semibold',
	},
});

export default React.memo(PrimaryButton);
