import { Todo, TodoContext } from "../context/TodoContext";
import { DragEventHandler, useContext } from "react";
import { Button } from "./Button";

export const TodoItem = ({
  todo,
  sectionId,
}: {
  todo: Todo;
  sectionId: number;
}) => {
  const { removeTodo } = useContext(TodoContext);
  const onDragStart: DragEventHandler<HTMLDivElement> = (e) => {
    console.log(e);
  };

  const onDragEnter: DragEventHandler<HTMLDivElement> = (e) => {
    console.log(e);
  };

  const onDragEnd: DragEventHandler<HTMLDivElement> = (e) => {
    console.log(e);
  };

  return (
    <div
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
      draggable
    >
      <p>{todo.title}</p>
      <Button onClick={() => removeTodo?.(sectionId, todo.id)}>삭제</Button>
    </div>
  );
};
