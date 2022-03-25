import React from 'react';
import { store } from './src/redux';
import { Provider } from 'react-redux';
import { Routes } from './src/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
