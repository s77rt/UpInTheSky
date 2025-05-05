import React from 'react';
import {StyleSheet} from 'react-native';
import type {Button} from './types';
import BaseButton from './BaseButton';
import Text from '../Text';
import Icon from '../Icon';

function DangerButton({text, icon, ...rest}: Button) {
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
		backgroundColor: '#9d0000',
		outlineColor: 'white',
		outlineWidth: 1,
	},
	hoveredButton: {},
	pressedButton: {},
	text: {
		color: 'white',
		fontWeight: 'bold',
	},
});

export default React.memo(DangerButton);
