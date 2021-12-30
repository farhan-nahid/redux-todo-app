import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import AllTodo from './components/AllTodo/AllTodo';

function App() {
  return (
    <section className='container'>
      <h1>Redux Todo App</h1>
      <div>
        <AddTodo />
      </div>
      <div>
        <AllTodo />
      </div>
    </section>
  );
}

export default App;
