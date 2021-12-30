import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../../redux/actions/todoActions';

const AllTodo = () => {
  const disPatch = useDispatch();
  const data = useSelector((state) => {
    return state.todo.todo;
  });

  return (
    <div>
      <h3>All Todo</h3>
      <ul>
        {data.length ? (
          <>
            {
              // map data
              data.map((item) => (
                <li key={item.id}>
                  {item.data} ----------->> <button onClick={() => disPatch(deleteTodo(item.id))}>delete</button>
                </li>
              ))
            }
          </>
        ) : (
          <h3>Please Add a Todo</h3>
        )}
      </ul>
    </div>
  );
};

export default AllTodo;
