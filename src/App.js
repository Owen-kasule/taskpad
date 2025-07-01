import { useState, useRef } from "react";
import TodoList from "./components/TodoList";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos(prevTodos => [
      ...prevTodos,
      { id: uuidv4(), name: name, complete: false }
    ]);
    todoNameRef.current.value = null;
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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className="App">
      <h1>TaskPad</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input 
        ref={todoNameRef} 
        type="text" 
        placeholder="New task..." 
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleAddTodo}>Add</button>
      <button onClick={handleClearCompleted}>Clear Completed</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </div>
  );
}

export default App;
