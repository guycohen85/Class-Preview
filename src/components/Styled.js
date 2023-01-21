import styled from '@emotion/styled';

// In a large project I would've create an organized styled components like layout, etc..

export const Row = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : 'flex-start')};
  align-items: center;
  margin: ${({ margin }) => (margin ? margin : '0')};
  & > * {
    flex-grow: ${({ grow }) => (grow ? grow : 'initial')};
  }
`;

export const MenuButton = styled.div`
  color: ${({ color }) => (color ? color : 'inherit')};
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 30px;
  & > img {
    margin-right: 7px;
  }
`;

export const IconBox = styled.div`
  min-width: 58px;
  & > img {
    margin-bottom: 13px;
  }
  & > div:nth-of-type(1) {
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 4px;
  }
  & > div:nth-of-type(2) {
    font-size: 11px;
    font-weight: 300;
  }
`;

export const ParticipantBox = styled.div`
  display: flex;
  align-items: center;
  width: ${({ size }) => (size === 'small' ? 'initial' : '45%')};
  padding: ${({ size }) => (size === 'small' ? '8px 12px' : '0')};
  font-weight: ${({ size }) => (size === 'small' ? '300' : '400')};
  font-size: ${({ size }) => (size === 'small' ? '12px' : '15px')};
  & > img {
    margin-right: ${({ size }) => (size === 'small' ? '10px' : '18px')};
    width: ${({ size }) => (size === 'small' ? '20px' : '35px')};
    height: ${({ size }) => (size === 'small' ? '20px' : '35px')};
  }
`;
