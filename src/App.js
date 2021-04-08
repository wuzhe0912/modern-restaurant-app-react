import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'constant/Theme';
import GlobalStyle from 'constant/GlobalStyle';
import Header from 'components/Header/index';
import TodoItem from 'components/TodoItem/index';
import TodoContext from 'components/TodoContext';

function App() {
  const [theme, setTheme] = useState('light');
  const [todos, setTodos] = useState([]);

  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      <ThemeProvider
        setTheme={setTheme}
        theme={theme === 'light' ? lightTheme : darkTheme}
      >
        <GlobalStyle />
        <Header theme={theme} setTheme={setTheme}></Header>
        <TodoItem></TodoItem>
      </ThemeProvider>
    </TodoContext.Provider>
  );
}

export default App;
