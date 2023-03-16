import { ChangeEventHandler, useState } from "react";
import { ISection } from "../context/TodoContext";

export const useTodo = () => {
  const [sectionValue, setSectionValue] = useState("");
  const [todoValue, setTodoValue] = useState("");
  const [sections, setSections] = useState<ISection[]>([
    { title: "Section 1", todos: [] },
  ]);

  const onChangeTodoValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodoValue(e.target.value);
  };


  const addSection = () => {
    setSections([...sections, {
      title: sectionValue,
      todos: []
    }]);


    setSectionValue('')
  };

  const removeSection = (sectionIndex: number) => {
    setSections(sections.filter((_, index) => index !== sectionIndex));
  };

  const onChangeSectionValue:ChangeEventHandler<HTMLInputElement> = (e) => {
    setSectionValue(e.target.value);
  }


  const addTodo = (sectionIndex: number = 0) => {
    const newSections = [...sections];
    newSections[sectionIndex].todos.push({
      id:Date.now(),
      title: todoValue
    });
    setSections(newSections);
    setTodoValue("");
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
    onChangeTodoValue,
    sections,
    addSection,
    removeSection,
    addTodo,
    removeTodo,
    onChangeSectionValue,
    sectionValue
  };
};
