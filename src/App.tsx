import { useState } from "react";
import "./App.css";
import { Board, Button, Input, Section, TodoItem } from "./components";
import { TodoContext } from "./context/TodoContext";
import { useTodo } from "./hooks/useTodo";

function App() {
  const todo = useTodo();

  const onClickAddTodo = () => {
    todo.addTodo(0, { title: todo.todoValue, id: Date.now() });
    todo.resetTodoValue();
  };

  const onClickSection = () => {};

  return (
    <TodoContext.Provider value={todo}>
      <Section />
      {todo.sections.map((section) => (
        <ol key={section.title}>
          {section.title}
          {section.todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ol>
      ))}
      <Input onChange={todo.onChangeTodoValue} />
      <Button onClick={onClickAddTodo}>투두추가</Button>
    </TodoContext.Provider>
  );
}

export default App;
