import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './aula-redux01/redux/reducers';

// Criando a Store e conectando com a extensão Redux DevTooks
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// Criação do componente Provider, que passa uma Store
ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));