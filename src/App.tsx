import "./App.css";
import { Button, Input, Section } from "./components";
import { TodoContext } from "./context/TodoContext";
import { useTodo } from "./hooks/useTodo";

function App() {
  const todo = useTodo();

  return (
    <TodoContext.Provider value={todo}>
      <div style={{ display: "flex", gap: 30 }}>
        {todo.sections.map((section, index) => (
          <Section key={index} section={section} />
        ))}
      </div>
      <Input value={todo.sectionValue} onChange={todo.onChangeSectionValue} />
      <Button onClick={todo.addSection}>섹션추가</Button>
      <Input value={todo.todoValue} onChange={todo.onChangeTodoValue} />
      <Button onClick={() => todo.addTodo()}>투두추가</Button>
    </TodoContext.Provider>
  );
}

export default App;

/**
 * TODO
 * - 드래그 이벤트 정리
 */
