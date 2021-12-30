import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/actions/todoActions';

const AddTodo = () => {
  const [data, setData] = useState('');
  const dispatch = useDispatch();

  const handelTodoSubmit = (e) => {
    e.preventDefault();
    if (data.length) {
      dispatch(addTodo(data));
    } else {
      alert('Please Write something');
    }
  };

  return (
    <div>
      <h3>ADD TODO</h3>
      <form onSubmit={handelTodoSubmit}>
        <input type='text' placeholder='Enter a todo' onBlur={(e) => setData(e.target.value)} />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
