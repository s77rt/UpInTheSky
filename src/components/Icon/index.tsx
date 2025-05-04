import React from 'react';
import {SvgProps} from 'react-native-svg';

export type IconProps = {
	src: React.FC<SvgProps>;
	width?: number;
	height?: number;
};

function Icon({src: SVGIcon, width = 16, height = 16}: IconProps) {
	return <SVGIcon width={width} height={height} />;
}

export default React.memo(Icon);
