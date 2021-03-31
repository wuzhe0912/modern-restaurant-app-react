import React from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY_SM } from 'constant/BreakPoint';
import LightMobileHeaderBg from 'assets/bg-mobile-light.jpg';
import LightDesktopHeaderBg from 'assets/bg-desktop-light.jpg';
import DarkMobileHeaderBg from 'assets/bg-mobile-dark.jpg';
import DarkDesktopHeaderBg from 'assets/bg-desktop-dark.jpg';
import TodoTitle from 'components/TodoTitle';

const HeaderWrap = styled.header`
  width: 100%;
  height: 200px;

  ${MEDIA_QUERY_SM} {
    height: 300px;
  }
`;

const BgStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
`;

const LightHeaderBg = styled(BgStyle)`
  background-image: url(${LightMobileHeaderBg});

  ${MEDIA_QUERY_SM} {
    background-image: url(${LightDesktopHeaderBg});
  }
`;

const DarkHeaderBg = styled(BgStyle)`
  background-image: url(${DarkMobileHeaderBg});

  ${MEDIA_QUERY_SM} {
    background-image: url(${DarkDesktopHeaderBg});
  }
`;

const Header = ({ theme, setTheme }) => {
  return (
    <HeaderWrap>
      {theme === 'light' ? (
        <LightHeaderBg>
          <TodoTitle theme={theme} setTheme={setTheme}></TodoTitle>
        </LightHeaderBg>
      ) : (
        <DarkHeaderBg>
          <TodoTitle theme={theme} setTheme={setTheme}></TodoTitle>
        </DarkHeaderBg>
      )}
    </HeaderWrap>
  );
};

export default Header;
