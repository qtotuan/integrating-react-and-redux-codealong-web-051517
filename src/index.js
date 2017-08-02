import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import createStore from './createStore'
import changeCount from './reducers/changeCount'

export function render() {
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
  );
};

const store = createStore(changeCount)

store.dispatch({ type: '@@INIT'})

// render();
