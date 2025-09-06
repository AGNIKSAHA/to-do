import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
const TodoItems = ({ todoItems }) => {
  return (
    <div className="container ">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoname={item.name}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
