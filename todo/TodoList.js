import React from "react";
import todo from "./todo";

export default function TodoList({ todos, toggleTodo }) {
  return todos.map((todo) => {
    return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />;
  });
}
