import React from 'react';

import {
  BulletIndicatorWrapper,
  BulletIndicatorContainer,
  BulletWrapper,
  Bullet
} from './BulletIndicatorStyles';

const BulletIndicator = ({
  size,
  currentSlideIndex,
  slideHandler
}) => {
  const bulletsList = Array.from({ length: size }, (el, i) =>
    <BulletWrapper key={`bullet-menu-item-${i}`}>
      <Bullet
        data-key = { i }
        current={ i === currentSlideIndex ? true : false }
        onClick={ slideHandler } />
    </BulletWrapper> 
  );

  return (
    <BulletIndicatorWrapper>
      <BulletIndicatorContainer>
        { bulletsList }
      </BulletIndicatorContainer>
    </BulletIndicatorWrapper>
  );
};

export default BulletIndicator;
