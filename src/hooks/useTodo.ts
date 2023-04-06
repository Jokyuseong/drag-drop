import { ChangeEventHandler, useState } from "react";
import { ISection } from "../context/TodoContext";

export const useTodo = () => {
  const [sectionValue, setSectionValue] = useState("");
  const [todoValue, setTodoValue] = useState("");
  const [sections, setSections] = useState<ISection[]>([
    { title: "Section 1", todos: [], id: Date.now() },
  ]);

  const onChangeTodoValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodoValue(e.target.value);
  };

  const addSection = () => {
    setSections([
      ...sections,
      {
        title: sectionValue,
        todos: [],
        id: Date.now(),
      },
    ]);

    setSectionValue("");
  };

  const removeSection = (sectionId: number) => {
    setSections(sections.filter(({ id }) => id !== sectionId));
  };

  const onChangeSectionValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSectionValue(e.target.value);
  };

  const addTodo = (sectionId: number = 0) => {
    const newSections = sections.map((section) => ({
      ...section,
      todos: [...section.todos],
    }));
    newSections[sectionId].todos.push({
      id: Date.now(),
      title: todoValue,
    });
    setSections(newSections);
    setTodoValue("");
  };

  const removeTodo = (sectionId: number, todoId: number) => {
    const newSections = sections.map((section) => ({
      ...section,
      todos: [...section.todos],
    }));
    const sectionIndex = newSections.findIndex(
      (section) => section.id === sectionId
    );
    newSections[sectionIndex].todos = newSections[sectionIndex].todos.filter(
      ({ id }) => id !== todoId
    );
    setSections(newSections);
  };

  return {
    todoValue,
    onChangeTodoValue,
    sections,
    addSection,
    removeSection,
    addTodo,
    removeTodo,
    onChangeSectionValue,
    sectionValue,
  };
};
