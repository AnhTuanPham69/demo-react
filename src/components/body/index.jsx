import { useState } from "react";
import "./style.css";
import TodoItem from "./TodoList";

function Body() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="body">
      <div className="todo-list">
        {todos.map((value, index) => (
          <TodoItem key={index} value={value} />
        ))}
      </div>
      <button
        onClick={() => {
          setTodos([...todos, `todoList-${todos.length}`]);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default Body;
