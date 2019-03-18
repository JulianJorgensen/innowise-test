import { SET_INDEX } from './actions';

const currentState = {
  activeSlideIndex: 0
};

export const reducer = (state = currentState, action) => {
  switch(action.type) {
    case SET_INDEX:
      return Object.assign({}, state, { activeSlideIndex: action.payload });
    default:
      return state;
  }
};
