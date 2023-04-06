import { createContext, useContext } from "react";
import { useTodo } from "../hooks/useTodo";

export const TodoContext = createContext<Partial<ReturnType<typeof useTodo>>>(
  {}
);

export const useTodoContext = () => useContext(TodoContext);

export interface Todo {
  title: string;
  id: number;
}

export interface ISection {
  id: number;
  title: string;
  todos: Todo[];
}
