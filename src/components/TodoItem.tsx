import {Todo} from "../context/TodoContext";
import {DragEventHandler} from "react";

export const TodoItem = ({todo}: {todo: Todo}) => {
  const onDragStart:DragEventHandler<HTMLLIElement> = (e) => {
    console.log(e)
  }

  const onDragEnter:DragEventHandler<HTMLLIElement> = (e) => {
    console.log(e)

  }

  const onDragEnd:DragEventHandler<HTMLLIElement> = (e) => {
    console.log(e)

  }

  return <li onDragStart={onDragStart} onDragEnter={onDragEnter} onDragEnd={onDragEnd} draggable>{todo.title}</li>;
};
