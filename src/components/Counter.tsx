import { useState } from "react";

export default function Counter({ todos }) {
  return (
    <p>
      <b>{todos.filter((t) => t.isCompleted).length}</b> / {todos.length} todos
      completed
    </p>
  );
}
