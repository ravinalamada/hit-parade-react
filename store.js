import {createStore} from 'redux';
import {reducers} from './reducers';

const persistedState = localStorage.getItem('reducers')
                       ? JSON.parse(localStorage.getItem('reducers'))
                       : {}

const store = createStore(reducers, persistedState);
store.subscribe(() => {
  localStorage.setItem('reducers', JSON.stringify(store.getState()))
})

export default store;
