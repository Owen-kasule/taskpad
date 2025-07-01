import { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodoForm from "./components/NewTodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  const toggleTodo = id => {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    if (todo) todo.complete = !todo.complete;
    setTodos(newTodos);
  };

  const handleClearCompleted = () => {
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>TaskPad</h1>
      <NewTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <button onClick={handleClearCompleted}>Clear Completed</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </div>
  );
}

export default App;
