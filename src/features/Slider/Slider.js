import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactSwipe from 'react-swipe';

import BulletIndicator from '../../components/BulletIndicator';

import { sliderStore } from '../../helpers/sliderStore';

import { setIndex } from '../../actions';

import {
  SliderContainer,
  SliderItemContainer,
  SliderCentralItem,
  SliderSideItem,
  Image
} from './SliderStyles';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.reactSwipeElement = React.createRef();

    this.setSwipeEl = element => {
      this.reactSwipeElement = element;
    };

    this.swipeOptions.transitionEnd = this.swipeOptions.transitionEnd.bind(this);
  };

  sliderNodes = sliderStore.map((value, i) => {
    return (
      <div key={ i }>
        <SliderItemContainer>
          <Image srcSet={`
            ${sliderStore[i].small} 200w,
            ${sliderStore[i].medium} 350w,
            ${sliderStore[i].large} 500w
          `}
          sizes="
            (max-width: 480px) 50vw,
            (min-width: 480px) and (max-width: 768px) 40vw,
            (min-width: 768px) 20vw
            " alt="" />
          <SliderSideItem sideImg={ sliderStore[i].left } />
          <SliderCentralItem img={ sliderStore[i].central } />
          <SliderSideItem sideImg={ sliderStore[i].right } />
        </SliderItemContainer>
      </div>
    );
  });
  
  swipeOptions = {
    transitionEnd: function(index) {
      const { onSetIndex } = this.props;
      onSetIndex(index); 
    }
  };

  slideByIndex = event => {
    const key = parseInt(event.target.dataset.key, 10);
    this.reactSwipeElement.slide(key);
  };

  render() {
    const { activeSlideIndex } = this.props;

    return (
      <SliderContainer>
        <ReactSwipe
          ref={ this.setSwipeEl }
          swipeOptions={ this.swipeOptions }>
          { this.sliderNodes }
        </ReactSwipe>
        <BulletIndicator
          slideHandler={ this.slideByIndex }
          size={ this.sliderNodes.length }
          currentSlideIndex={ activeSlideIndex } />
      </SliderContainer>
    );
  }
};

const mapStateToProps = state => ({
  activeSlideIndex: state.activeSlideIndex
});

const mapDispatchToProps = dispatch => ({
  onSetIndex: index => dispatch(setIndex(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
