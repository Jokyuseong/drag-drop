import { createContext } from "react";
import { useTodo } from "../hooks/useTodo";

export const TodoContext = createContext<Partial<ReturnType<typeof useTodo>>>(
  {}
);

export interface Todo {
  title: string;
  id: number;
}

export interface ISection {
  title: string;
  todos: Todo[];
}
