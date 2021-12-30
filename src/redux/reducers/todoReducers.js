import { ADD_TODO, DELETE_TODO } from '../types/todoTypes';

const initialState = {
  todo: [],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      const newState = {
        ...state,
        todo: [...state.todo, payload],
      };
      return newState;
    }

    case DELETE_TODO: {
      const newState = {
        ...state,
        todo: state.todo.filter((item) => item.id !== payload),
      };
      return newState;
    }

    default:
      return state;
  }
};

export { todoReducer };
