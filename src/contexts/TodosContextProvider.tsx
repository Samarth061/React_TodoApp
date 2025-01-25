import { createContext, useEffect, useState } from "react";
import { Todo } from "../lib/types";

type TodosContextProviderProps = {
  children: React.ReactNode;
};

type TTodosContext = {
  todos: Todo[];
  totaNumberOfTodos: number;
  totalNumberOfCompletedTodos: number;
  handleAddTodo: (todoText: string) => void;
  handleToggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
};

export const TodosContext = createContext<TTodosContext | null>(null);

const getInitialTodos = () => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    return JSON.parse(savedTodos);
  } else {
    return [];
  }
};

export default function TodosContextProvider({
  children,
}: TodosContextProviderProps) {
  const [todos, setTodos] = useState<Todo[]>(getInitialTodos);

  //derived state
  const totaNumberOfTodos = todos.length;
  const totalNumberOfCompletedTodos = todos.filter((t) => t.isCompleted).length;

  //event handlers
  const handleAddTodo = (todoText: string) => {
    if (todos.length >= 3) {
      alert("Log in to add more todos");
      return;
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: todoText,
          isCompleted: false,
        },
      ]);
    }
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((t) => {
        if (t.id === id) {
          return { ...t, isCompleted: !t.isCompleted };
        }
        return t;
      })
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // side effects
  // add todos local storage

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider
      value={{
        todos,
        totaNumberOfTodos,
        totalNumberOfCompletedTodos,
        handleAddTodo,
        handleToggleTodo,
        handleDeleteTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
