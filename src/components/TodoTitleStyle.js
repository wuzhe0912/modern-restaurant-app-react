import styled from 'styled-components';
import { MEDIA_QUERY_SM } from 'constant/BreakPoint';

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;
  width: 327px;

  ${MEDIA_QUERY_SM} {
    width: 540px;
  }
`;

export const TitleLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.light};

  h1 {
    letter-spacing: 10px;
  }
`;

export const ModeIcon = styled.img`
  width: 20px;
  height: 20px;

  ${MEDIA_QUERY_SM} {
    width: 26px;
    height: 26px;
  }
`;

export const TodoForm = styled.form`
  width: 100%;
  margin-top: 40px;
  position: relative;
`;

export const TodoInput = styled.input`
  width: 100%;
  height: 48px;
  background: ${({ theme }) => theme.colors.InputBg};
  color: ${({ theme }) => theme.colors.InputText};
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border-radius: 5px;
  padding: 10px;

  ${MEDIA_QUERY_SM} {
    height: 64px;
  }
`;

export const TodoInputBtn = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;
  width: 24px;
  height: 24px;
  border: 1px solid linear-gradient(135deg, #55ddff 0%, #c058f3 100%);
  background: linear-gradient(135deg, #55ddff 0%, #c058f3 100%);
  border-radius: 50%;

  ${MEDIA_QUERY_SM} {
    width: 36px;
    height: 36px;
  }
`;

export const TodoInputIcon = styled.img``;
