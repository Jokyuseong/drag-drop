import { TodoItem } from "./TodoItem";
import { ISection, TodoContext } from "../context/TodoContext";
import { Button } from "./Button";
import { useContext } from "react";

export const Section = ({ section }: { section: ISection }) => {
  const { removeSection } = useContext(TodoContext);
  return (
    <div>
      <p>{section.title}</p>
      <Button onClick={() => removeSection?.(section.id)}>섹션삭제</Button>
      <ol key={section.title} style={{ backgroundColor: "gray" }}>
        {section.todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem sectionId={section.id} todo={todo} />
          </li>
        ))}
      </ol>
    </div>
  );
};
