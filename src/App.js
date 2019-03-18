import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Menu from './components/Menu';

import Slider from './features/Slider';

import { reducer } from './reducers';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
);

export const SliderContext = React.createContext({
  currentSlideIndex: 0
});

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Menu />
        <Slider />
      </Provider>
    );
  }
};

export default App;
