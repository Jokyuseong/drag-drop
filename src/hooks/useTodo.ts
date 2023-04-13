import { ChangeEventHandler, useRef, useState } from "react";
import { ISection, Todo } from "../context/TodoContext";

export const useTodo = () => {
  const [sectionValue, setSectionValue] = useState("");
  const [todoValue, setTodoValue] = useState<Todo | string>("");
  const [sections, setSections] = useState<ISection[]>([
    { title: "Section 1", todos: [], id: 0 },
  ]);

  const dragStartedTodoItem = useRef<Todo | null>(null);
  const selectedSection = useRef<ISection | null>(null);

  const moveTodoItem = () => {
    const selectedSectionId = selectedSection.current?.id;
    const selectedSectionIndex = sections.findIndex(
      (section) => section.id === selectedSectionId
    );
    const currentDragStartedTodoItem = dragStartedTodoItem.current;

    console.log("selectedSectionIndex", selectedSectionIndex);

    if (selectedSectionIndex < 0) return;

    const dragStartTodoItemIndex = sections[
      selectedSectionIndex
    ].todos.findIndex((todo) => todo.id === currentDragStartedTodoItem?.id);

    let dragStartTodoItemIndex2 = null;
    sections.forEach((section) => {
      const index = section.todos.findIndex(
        (todo) => todo.id === currentDragStartedTodoItem?.id
      );
      if (index > -1) dragStartTodoItemIndex2 = index;
    });

    console.log("dragStartTodoItemIndex", dragStartTodoItemIndex2);

    setTodoValue(currentDragStartedTodoItem ? currentDragStartedTodoItem : "");
    addTodo(selectedSectionIndex);
    removeTodo(selectedSectionIndex, dragStartTodoItemIndex);
    selectedSection.current = null;
    dragStartedTodoItem.current = null;
  };

  const onChangeTodoValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodoValue(e.target.value);
  };

  const addSection = () => {
    setSections([
      ...sections,
      {
        id: sections.length,
        title: sectionValue,
        todos: [],
      },
    ]);

    setSectionValue("");
  };

  const removeSection = (sectionIndex: number) => {
    setSections(sections.filter((_, index) => index !== sectionIndex));
  };

  const onChangeSectionValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSectionValue(e.target.value);
  };

  const addTodo = (sectionIndex: number = 0) => {
    const newSections = [...sections];
    newSections[sectionIndex].todos.push({
      id: Date.now(),
      title: todoValue,
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
    sectionValue,
    selectedSection,
    dragStartedTodoItem,
    moveTodoItem,
  };
};
