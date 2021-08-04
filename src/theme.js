import {createTheme} from '@material-ui/core/styles';

const mainblue = '#E2F7FC';

const theme = (type) => createTheme({
  palette: {
    type: type ? type : 'light',
    primary: {
      main: mainblue,
      contrastText: '#fff',
    },
    secondary: {
      main: '#107540',
    },
    text: {
      primary: '#000000',
      secondary: '#746F81',
    }
  },
  typography: {
    h1: {
      fontSize: 24,
      fontWeight: 700,
      color: mainblue
    },
    h2: {
      fontSize: 16,
      letterSpacing: 1,
    },
    body1: {
      fontSize: 14,
    },
    button: {
      fontSize: 12,
      letterSpacing: 1.2,
      fontWeight: 'bold'
    },
    body2: {
      fontSize: 11,
    },
    caption: {
      fontSize: 9,
      letterSpacing: 1,
    }
  }
});

export default theme;