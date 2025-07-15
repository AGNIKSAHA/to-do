import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
const TodoItems = ({ todoItems }) => {
  return (
    <div className="container ">
      <AddTodo></AddTodo>
      {todoItems.map((item) => (
        <TodoItem todoDate={item.dueDate} todoname={item.name}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
