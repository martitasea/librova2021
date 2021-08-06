import {createTheme} from '@material-ui/core/styles';
import {DARKGREEN, NAVYBLUE, DARKGREY, TOMATO} from './config';

import ChildishWoff2 from '../static/fonts/childish-reverie1-webfont.woff2';
/*import ChildishDoodlesWoff2 from '../static/fonts/childish-reverie-doodles1-webfont.woff2';*/
import 'typeface-dosis';

const childish = {
  fontFamily: 'Childish',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Childish'),
    url(${ChildishWoff2}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

/*const doodles = {
  fontFamily: 'Doodles',
  fontStyle: 'normal',
  fontWeight: 'normal',
  src: `
    local('Doodles'),
    url(${ChildishDoodlesWoff2}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};*/

const theme = (type) => createTheme({
  palette: {
    type: type ? type : 'light',
    primary: {
      main: NAVYBLUE,
    },
    secondary: {
      main: DARKGREEN,
    },
    text: {
      primary: DARKGREY,
      secondary: TOMATO,
    }
  },
  typography: {
    fontFamily: 'Doodles, Dosis, Childish, Arial',
    h1: { //childName
      fontSize: 40,
      color: NAVYBLUE,
      fontFamily: 'Childish'
    },
    h5: {
      fontFamily: 'Doodles'
    },
    subtitle1: { //blueTitles
      fontSize: 34,
      color: NAVYBLUE,
      fontFamily: 'Childish'
    },
    subtitle2: { //greenTitles
      fontSize: 34,
      color: DARKGREEN,
      fontFamily: 'Childish'
    },
    body1: { //generalText
      fontSize: 18,
      fontFamily: 'Arial'
    },
    body2: {
      fontSize: 12,
      fontFamily: 'Arial'
    },
    overline: { //bookTitle - school
      fontSize: 16,
      fontWeight: 700,
      fontFamily: 'Dosis'
    },
    button: { //buttons
      fontSize: 14,
      fontWeight: 700,
      fontFamily: 'Dosis',
      letterSpacing: 1
    },
    caption: { //notifications
      fontSize: 12,
      color: TOMATO,
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [childish]
      },
    }
  }
});

export default theme;