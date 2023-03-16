import {TodoItem} from "./TodoItem";
import {ISection} from "../context/TodoContext";

export const Section = ({section}: {section: ISection}) => {
  return <ol key={section.title} style={{backgroundColor: 'gray'}}>
    {section.title}
    {section.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo}/>
    ))}
  </ol>
};
