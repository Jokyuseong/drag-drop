import { Todo, useTodoContext } from "../context/TodoContext";
import { DragEventHandler } from "react";

export const TodoItem = ({ todo }: { todo: Todo }) => {
  const { dragStartedTodoItem, moveTodoItem } = useTodoContext();
  console.log("todo", todo);
  // todo drag 시작 시 어떤 아이템 드래그하는 지 저장
  const onDragStart: DragEventHandler<HTMLLIElement> = (e) => {
    if (!dragStartedTodoItem) return;
    dragStartedTodoItem.current = todo;
  };

  // drag가 끝났을 시 todo item을 옮김
  const onDragEnd: DragEventHandler<HTMLLIElement> = (e) => {
    if (!dragStartedTodoItem) return;
    moveTodoItem?.();
  };

  return (
    <li onDragStart={onDragStart} onDragEnd={onDragEnd} draggable>
      {todo.title}
    </li>
  );
};
