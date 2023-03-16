import { ChangeEventHandler, useState } from "react";
import { Section, Todo } from "../context/TodoContext";

export const useTodo = () => {
  const [todoValue, setTodoValue] = useState("");
  const [sections, setSections] = useState<Section[]>([
    { title: "Section 1", todos: [] },
  ]);

  const onChangeTodoValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodoValue(e.target.value);
  };

  const resetTodoValue = () => {
    setTodoValue("");
  };

  const addSection = (section: Section) => {
    setSections([...sections, section]);
  };

  const removeSection = (sectionIndex: number) => {
    setSections(sections.filter((_, index) => index !== sectionIndex));
  };

  const addTodo = (sectionIndex: number, todo: Todo) => {
    const newSections = [...sections];
    newSections[sectionIndex].todos.push(todo);
    setSections(newSections);
  };

  const removeTodo = (sectionIndex: number, todoIndex: number) => {
    const newSections = [...sections];
    newSections[sectionIndex].todos = newSections[sectionIndex].todos.filter(
      (_, index) => index !== todoIndex
    );
    setSections(newSections);
  };

  return {
    todoValue,
    resetTodoValue,
    onChangeTodoValue,
    sections,
    addSection,
    removeSection,
    addTodo,
    removeTodo,
  };
};
