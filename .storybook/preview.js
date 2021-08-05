import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '../src/theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: { disable: true },
  layout: 'fullscreen'
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Material-ui theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'circle', // Available icons: https://www.chromatic.com/component?appId=5a375b97f4b14f0020b0cda3&name=Basics%7CIcon&buildNumber=13899
      items: [
        { value: 'light', left: '⚪', title: 'Light' },
        { value: 'dark', left: '⚫', title: 'Dark' }
      ],
    },
  },
};

const withThemeProvider = (Story, context) => (
  <ThemeProvider
    theme={theme(context.globals.theme)}
  >
    <CssBaseline />
    <Story {...context} />
  </ThemeProvider>
);

export const decorators = [
  withThemeProvider,
];