import ReactDOM from 'react-dom';
import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './theme';

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
