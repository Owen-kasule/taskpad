import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export default function NewTodoForm({ addTodo }) {
  const todoNameRef = useRef();

  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    if (name === "") return;
    addTodo({
      id: uuidv4(),
      name: name,
      complete: false
    });
    todoNameRef.current.value = "";
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div>
      <input 
        ref={todoNameRef} 
        type="text" 
        placeholder="New task..." 
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}