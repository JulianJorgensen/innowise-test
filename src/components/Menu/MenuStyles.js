import styled from 'styled-components';

import { colors } from '../../styles';

export const MenuComponent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: ${props => props.open? '239px': 0};
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.BURGER_MENU_COLOR};
  transition: height 0.3s ease;
  z-index: 2;
  color: white;
`;

export const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  font-size: 15px;
`;

export const MenuCrown = styled.div`
  width: 39px;
  height: 44px;
  position: absolute;
  top: 12px;
  left: 20px;
  background: url(${props => props.img});
`;

export const MenuItem = styled.div`
  opacity: ${props => props.current ? '0.5' : '1'};
`;

export const MenuItemWrapper = styled.div`
  &:not(:nth-child(2)) {
    margin-top: 11px;
  }
`;

export const MenuButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  opacity: 0.9;
  display: flex;
  align-items: center;
  width: 100%;
  color: white;
`;

export const MenuButtonContainer = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 4px;
  margin: 20px 22px 0 auto;
`;

const Line = styled.div`
  height: 2px;
  width: 20px;
  background:  ${props => props.open ? '#FFF' : colors.BURGER_MENU_COLOR};
  transition: all 0.2s ease;
`;

export const TopLine = styled(Line)`
  transform: ${props => props.open ? 'rotate(45deg)' : 'none'};
  transform-origin: top left;
  margin-bottom: 5px;
`;

export const LineMiddle = styled(Line)`
  opacity:  ${props => props.open ? '0' : '1' };
  transform:  ${props => props.open ? 'translateX(-16px)' : 'none'};
`;

export const LineBottom = styled(Line)`
  transform:  ${props => props.open ? 'translateX(-1px) rotate(-45deg)' : 'none'};
  transform-origin: top left;
  margin-top: 5px;
`;

export const LanguageContainer = styled.div`
  position: absolute;
  display: flex;
  bottom: 20px;
`;

export const LanguageItem = styled.div`
  &:not(:first-child) {
    margin-left: 18px;
    opacity: 0.5
  }
`;
