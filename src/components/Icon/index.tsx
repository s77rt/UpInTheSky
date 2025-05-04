import React from 'react';
import {SvgProps} from 'react-native-svg';

type IconProps = {
	src: React.FC<SvgProps>;
	width?: number;
	height?: number;
};

function Icon({src: SVGIcon, width = 32, height = 32}: IconProps) {
	return <SVGIcon width={width} height={height} />;
}

export default React.memo(Icon);
