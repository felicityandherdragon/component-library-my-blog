import { light, dark, neutral, red, green, yellow } from './colors';
import { primaryFont } from './typography';

export const defaultTheme = {
  bgColor: light[100],
  primaryColor: light[500],
  secondaryColor: light[200],
  primaryHoverColor: light[470],
  primaryActiveColor: light[470],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  disabled: light[100],
  textColorOnDisabled: neutral[400],
  primaryFont: primaryFont,
  formElementBackground: light[200],
  textOnFormElementBackground: neutral[600],
  cardShadowA: light[300],
  cardShadowB: light[400],
  status: {
    warningColor: yellow[300],
    warningColorHover: yellow[100],
    warningColorActive: yellow[200],
    errorColor: red[300],
    errorColorHover: red[100],
    errorColorActive: red[200],
    successColor: green[300],
    successColorHover: green[100],
    successColorActive: green[200]
  }
};

export const darkTheme = {
  bgColor: dark[100],
  primaryColor: light[500],
  secondaryColor: light[200],
  primaryHoverColor: light[470],
  primaryActiveColor: light[470],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  disabled: light[100],
  textColorOnDisabled: neutral[400],
  primaryFont: primaryFont,
  formElementBackground: dark[200],
  textOnFormElementBackground: neutral[100],
  cardShadowA: light[300],
  cardShadowB: light[400],
  status: {
    warningColor: yellow[300],
    warningColorHover: yellow[100],
    warningColorActive: yellow[200],
    errorColor: red[300],
    errorColorHover: red[100],
    errorColorActive: red[200],
    successColor: green[300],
    successColorHover: green[100],
    successColorActive: green[200]
  }
};
