import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

const store = createStore( reducer, applyMiddleware(thunk) );
export default store;

// Thunk is useful when you want multiple things to happen in one action
