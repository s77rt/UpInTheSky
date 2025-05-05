import React from 'react';
import {StyleSheet} from 'react-native';
import type {Button} from './types';
import BaseButton from './BaseButton';
import Text from '../Text';
import Icon from '../Icon';

function PrimaryButton({text, icon, ...rest}: Button) {
	return (
		<BaseButton
			style={styles.button}
			hoverStyle={styles.hoveredButton}
			pressStyle={styles.pressedButton}
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
	hoveredButton: {
		outlineColor: '#ffffff',
		outlineWidth: 1,
		boxShadow: [
			{
				offsetX: 0,
				offsetY: 1,
				blurRadius: '10px',
				spreadDistance: '0px',
				color: '#0065ff',
			},
		],
	},
	pressedButton: {
		outlineColor: '#ffffff',
		outlineWidth: 1,
		boxShadow: [
			{
				offsetX: 0,
				offsetY: 1,
				blurRadius: '10px',
				spreadDistance: '0px',
				color: '#0065ff',
			},
		],
	},
	text: {
		color: 'white',
		fontWeight: 'semibold',
	},
});

export default React.memo(PrimaryButton);
