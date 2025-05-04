import React, {ReactElement, useCallback, useMemo, useState} from 'react';
import {StyleSheet} from 'react-native';
import type {ViewStyle} from '../View';
import Pressable from '../Pressable';
import type {BaseButtonProps} from './types';
import type {GestureResponderEvent, MouseEvent} from 'react-native';

function BaseButton({
	style: styleProp,
	hoverStyle: hoverStyleProp,
	pressStyle: pressStyleProp,
	onHoverIn: onHoverInProp,
	onHoverOut: onHoverOutProp,
	onPressIn: onPressInProp,
	onPressOut: onPressOutProp,
	text,
	icon,
	...rest
}: BaseButtonProps) {
	const [isHovered, setIsHovered] = useState(false);
	const [isPressed, setIsPressed] = useState(false);

	const style = useMemo<ViewStyle>(
		() => ({
			...styles.button,
			...styleProp,
		}),
		[styleProp],
	);
	const hoverStyle = useMemo<ViewStyle>(
		() => ({
			...style,
			...styles.hoveredButton,
			...hoverStyleProp,
		}),
		[style, hoverStyleProp],
	);
	const pressStyle = useMemo<ViewStyle>(
		() => ({
			...style,
			...styles.pressedButton,
			...pressStyleProp,
		}),
		[style, pressStyleProp],
	);

	const onHoverIn = useCallback(
		(event: MouseEvent) => {
			setIsHovered(true);
			onHoverInProp?.(event);
		},
		[onHoverInProp],
	);
	const onHoverOut = useCallback(
		(event: MouseEvent) => {
			setIsHovered(false);
			onHoverOutProp?.(event);
		},
		[onHoverOutProp],
	);
	const onPressIn = useCallback(
		(event: GestureResponderEvent) => {
			setIsPressed(true);
			onPressInProp?.(event);
		},
		[onPressInProp],
	);
	const onPressOut = useCallback(
		(event: GestureResponderEvent) => {
			setIsPressed(false);
			onPressOutProp?.(event);
		},
		[onPressOutProp],
	);

	const activeStyle = isPressed ? pressStyle : isHovered ? hoverStyle : style;

	return (
		<Pressable
			style={activeStyle}
			onHoverIn={onHoverIn}
			onHoverOut={onHoverOut}
			onPressIn={onPressIn}
			onPressOut={onPressOut}
			{...rest}>
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
	hoveredButton: {},
	pressedButton: {},
});

export default React.memo(BaseButton);
