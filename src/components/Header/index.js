import React from 'react';
import { HeaderWrap, LightHeaderBg, DarkHeaderBg } from './style';
import TodoInput from 'components/Header/TodoInput';

const Header = ({ theme, setTheme }) => {
  return (
    <HeaderWrap>
      {theme === 'light' ? (
        <LightHeaderBg>
          <TodoInput theme={theme} setTheme={setTheme}></TodoInput>
        </LightHeaderBg>
      ) : (
        <DarkHeaderBg>
          <TodoInput theme={theme} setTheme={setTheme}></TodoInput>
        </DarkHeaderBg>
      )}
    </HeaderWrap>
  );
};

export default Header;
