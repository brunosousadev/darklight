import React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';
import Welcome from './Components/Welcome';

import themes from './themes';

export default function App() {
  const diveceTheme = useColorScheme();
  const theme = themes[diveceTheme] || themes.dark;
  return (
    <ThemeProvider theme={theme}>
      <Welcome />
    </ThemeProvider>
  );
}
