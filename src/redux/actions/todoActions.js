import { ADD_TODO, DELETE_TODO } from '../types/todoTypes';

const addTodo = (payload) => {
  return { type: ADD_TODO, payload: { id: new Date().getTime().toString(), data: payload } };
};

const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};

export { addTodo, deleteTodo };
