import ReactDOM from 'react-dom';
import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import {ThemeProvider} from '@material-ui/core/styles';

const App = () => {
  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline/>
      <main>
        <p>APLICACIÓN LIBROVA</p>
      </main>
    </ThemeProvider>
  );
};

const target = document.getElementById('app');
if (target) ReactDOM.render(<App/>, target);

export default App;
