import React from 'react';
import App from 'components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'store';

const store = createStore(reducers);

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;