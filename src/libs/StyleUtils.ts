import type {TextStyle} from 'react-native';

function getDefaultTextStyle(
	fontWeight: TextStyle['fontWeight'] = 'regular',
	fontStyle: TextStyle['fontStyle'] = 'normal',
): TextStyle {
	const fontSize = 12;

	let fontFamilyNormal;
	let fontFamilyItalic;

	switch (fontWeight) {
		case 100:
		case '100':
		case 'thin':
			fontFamilyNormal = 'Montserrat-Thin';
			fontFamilyItalic = 'Montserrat-ThinItalic';
			break;

		case 200:
		case '200':
		case 'ultralight':
			fontFamilyNormal = 'Montserrat-ExtraLight';
			fontFamilyItalic = 'Montserrat-ExtraLightItalic';
			break;

		case 300:
		case '300':
		case 'light':
			fontFamilyNormal = 'Montserrat-Light';
			fontFamilyItalic = 'Montserrat-LightItalic';
			break;

		case 400:
		case '400':
		case 'regular':
		case 'normal':
			fontFamilyNormal = 'Montserrat-Regular';
			fontFamilyItalic = 'Montserrat-Italic';
			break;

		case 500:
		case '500':
		case 'medium':
			fontFamilyNormal = 'Montserrat-Medium';
			fontFamilyItalic = 'Montserrat-MediumItalic';
			break;

		case 600:
		case '600':
		case 'semibold':
			fontFamilyNormal = 'Montserrat-SemiBold';
			fontFamilyItalic = 'Montserrat-SemiBoldItalic';
			break;

		case 700:
		case '700':
		case 'bold':
			fontFamilyNormal = 'Montserrat-Bold';
			fontFamilyItalic = 'Montserrat-BoldItalic';
			break;

		case 800:
		case '800':
			fontFamilyNormal = 'Montserrat-ExtraBold';
			fontFamilyItalic = 'Montserrat-ExtraBoldItalic';
			break;

		case 900:
		case '900':
		case 'black':
		case 'heavy':
			fontFamilyNormal = 'Montserrat-Black';
			fontFamilyItalic = 'Montserrat-BlackItalic';
			break;

		default:
			fontFamilyNormal = 'Montserrat-Regular';
			fontFamilyItalic = 'Montserrat-Italic';
			console.warn('Unsupported font weight', fontWeight);
	}

	let fontFamily;
	switch (fontStyle) {
		case 'normal':
			fontFamily = fontFamilyNormal;
			break;

		case 'italic':
			fontFamily = fontFamilyItalic;
			break;

		default:
			fontFamily = fontFamilyNormal;
			console.warn('Unsupported font style', fontStyle);
	}

	return {fontFamily, fontWeight, fontStyle, fontSize};
}

export {getDefaultTextStyle};
