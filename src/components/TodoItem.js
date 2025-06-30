export default function TodoItem({ todo, toggleTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo.id)}
        />
        {todo.name}
      </label>
    </li>
  );
}