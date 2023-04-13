import { TodoItem } from "./TodoItem";
import { ISection, useTodoContext } from "../context/TodoContext";
import { DragEventHandler } from "react";

export const Section = ({ section }: { section: ISection }) => {
  const { selectedSection, dragStartedTodoItem } = useTodoContext();

  // section에 drag enter 시 어떤 section에 들어왔는 지 저장
  const onDragEnter: DragEventHandler<HTMLOListElement> = (e) => {
    console.log(selectedSection);
    if (!selectedSection) return;
    console.log("dragEnter", dragStartedTodoItem?.current);
    selectedSection.current = section;
  };

  // section에서 drag가 떠날 시 선택된 section 초기화
  // const onDragLeave: DragEventHandler<HTMLOListElement> = (e) => {
  //   if (!selectedSection) return;
  //   selectedSection.current = null;
  // };

  return (
    <ol
      key={section.title}
      style={{ backgroundColor: "gray" }}
      onDragEnter={onDragEnter}
      // onDragLeave={onDragLeave}
    >
      {section.title}
      {section.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ol>
  );
};
