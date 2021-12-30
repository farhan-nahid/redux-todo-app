import { combineReducers, createStore } from 'redux';
import { todoReducer } from './reducers/todoReducers';

const allReducers = combineReducers({ todo: todoReducer });

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export { store };
