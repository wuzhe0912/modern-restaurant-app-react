import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'constant/Theme';
import GlobalStyle from 'constant/GlobalStyle';
import Header from 'components/Header';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider
      setTheme={setTheme}
      theme={theme === 'light' ? lightTheme : darkTheme}
    >
      <GlobalStyle />
      <Header theme={theme} setTheme={setTheme}></Header>
    </ThemeProvider>
  );
}

export default App;
