import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className="container ">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoname={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
