import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';

import crown from '../../assets/images/crown.png';

import { sliderStore } from '../../helpers/sliderStore';

import {
  MenuComponent,
  MenuItemContainer,
  MenuCrown,
  MenuItem,
  MenuItemWrapper,
  MenuButtonWrapper,
  MenuButtonContainer,
  TopLine,
  LineMiddle,
  LineBottom,
  LanguageContainer,
  LanguageItem
} from './MenuStyles';

const Menu = ({ activeSlideIndex }) => {
  const [open, handleClick] = useState(false);

  const renderMenuList = () => {
    return (
      open ?
        <MenuItemContainer>
          <MenuCrown img={ crown } />
          {
            sliderStore.map((el, i) => (
              <MenuItemWrapper key={`menu-item-${i}`}>
               <MenuItem current={ i === activeSlideIndex ? true : false }>
                { sliderStore[i].title }
               </MenuItem>
              </MenuItemWrapper>)
            )
          }
          <LanguageContainer>
            <LanguageItem>DK</LanguageItem>
            <LanguageItem>EN</LanguageItem>
            <LanguageItem>JP</LanguageItem>
          </LanguageContainer>
        </MenuItemContainer> : null
    );
  };

  return (
    <Fragment>
      <MenuButtonWrapper>
        <MenuButtonContainer
         onClick={ () => handleClick(!open) }>
          <TopLine open={ open } />
          <LineMiddle open={ open } />
          <LineBottom open={ open } />
        </MenuButtonContainer>
      </MenuButtonWrapper>
      <MenuComponent open={ open }>
        { renderMenuList() }
      </MenuComponent>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  activeSlideIndex: state.activeSlideIndex
});

export default connect(mapStateToProps)(Menu);
