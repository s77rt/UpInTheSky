import {ReactElement} from 'react';
import type {PressableProps} from '../Pressable';
import {TextProps} from '../Text';
import {IconProps} from '../Icon';
import {ViewStyle} from '../View';

export type BaseButtonProps = Omit<PressableProps, 'style'> & {
	style?: ViewStyle;
	hoverStyle?: ViewStyle;
	pressStyle?: ViewStyle;
	text?: ReactElement<TextProps>;
	icon?: ReactElement<IconProps>;
};

export type Button = Pick<
	BaseButtonProps,
	| 'onHoverIn'
	| 'onHoverOut'
	| 'onLongPress'
	| 'onPress'
	| 'onPressIn'
	| 'onPressOut'
> & {
	text?: TextProps['children'];
	icon?: IconProps['src'];
};
