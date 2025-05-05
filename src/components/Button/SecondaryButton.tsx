import React, {useMemo, useState} from 'react';
import {StyleSheet} from 'react-native';
import type {Button} from './types';
import BaseButton from './BaseButton';
import Text from '../Text';
import Icon from '../Icon';
import {Background} from '@react-navigation/elements';

function SecondaryButton({text, icon, ...rest}: Button) {
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
		backgroundColor: '#d0e3ff',
	},
	hoveredButton: {backgroundColor: '#e6f0ff'},
	pressedButton: {backgroundColor: '#e6f0ff'},
	text: {
		color: 'black',
		fontWeight: 'bold',
	},
});

export default React.memo(SecondaryButton);
