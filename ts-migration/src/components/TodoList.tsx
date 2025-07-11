"use client";

import { useState, ChangeEvent } from "react";
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};
const ToDoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");


  const addTodo = (): void => {
    if (input.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };
  const toggleComplete = (id: number): void => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };
  const deleteTodo = (id: number): void => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleChange = (e:ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h2>Todo List</h2>

      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter a task"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
