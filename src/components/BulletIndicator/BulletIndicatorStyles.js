import styled from 'styled-components';

import { colors } from '../../styles';

export const BulletIndicatorWrapper = styled.section`
  display: flex;
  justify-content: center;
`;

export const BulletIndicatorContainer = styled.div`
  display: flex;
  width: 52px;
  height: 10px;
`;

export const BulletWrapper = styled.div`
  &:not(:first-child) {
    margin-left: 12.5px;
  }
`;

export const Bullet = styled.div`
  height: 9px;
  width: 9px;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${colors.BULLET_SELECTED_COLOR};
  opacity: ${props => props.current ? '1' : '0.5'};
`;
