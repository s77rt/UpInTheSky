import React from 'react';
import {Pressable} from 'react-native';
import Text from './Text';

type ButtonProps = {};

function Button({}: ButtonProps) {
	return (
		<Pressable style={{backgroundColor: 'blue'}}>
			<Text>Press me</Text>
		</Pressable>
	);
}

export default React.memo(Button);
