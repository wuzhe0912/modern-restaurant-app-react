import styled from 'styled-components';
import DeleteImg from 'assets/icon-cross.svg';
import { MEDIA_QUERY_SM } from 'constant/BreakPoint';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`;

const SectionWrapper = styled.section`
  display: flex;
  align-items: center;
  width: 327px;
  min-height: 50px;
  color: ${({ theme }) => theme.colors.TagText};
  background-color: ${({ theme }) => theme.colors.InputBg};

  ${MEDIA_QUERY_SM} {
    width: 540px;
  }
`;

export const TagWrapper = styled(SectionWrapper)`
  justify-content: center;
  margin-bottom: 20px;

  span {
    margin-right: 12px;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.2px;
    cursor: pointer;

    ${MEDIA_QUERY_SM} {
      font-size: 18px;
    }
  }

  .select-tag {
    color: #3a7cfd;
  }
`;

export const InfoWrapper = styled(SectionWrapper)`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  .clean-todos {
    cursor: pointer;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  width: 327px;
  max-height: 450px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.InputBg};
  border-radius: 5px;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);

  ${MEDIA_QUERY_SM} {
    width: 540px;
  }
`;

export const Li = styled.li`
  display: grid;
  grid-template-columns: 20px 1fr 20px;
  align-items: center;
  min-height: 50px;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.ItemText};
  border-top: 1px solid ${({ theme }) => theme.colors.InputBorderBottom};
`;

const Check = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
`;

export const CheckIcon = styled(Check)`
  border: 1px solid ${({ theme }) => theme.colors.CheckBtn};
`;

export const CheckedIcon = styled(Check)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid linear-gradient(135deg, #55ddff 0%, #c058f3 100%);
  background: linear-gradient(135deg, #55ddff 0%, #c058f3 100%);
`;

export const CheckText = styled.div`
  height: 20px;
  padding-left: 16px;

  span {
    letter-spacing: 1px;
  }

  .checked-text {
    color: ${({ theme }) => theme.colors.CheckedText};
    text-decoration: line-through;
    opacity: 0.8;
    font-style: italic;
  }
`;

export const DeleteIcon = styled.i`
  width: 20px;
  height: 20px;
  background-image: url(${DeleteImg});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;
