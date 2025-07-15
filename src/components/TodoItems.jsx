import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <div className="container ">
      {todoItems.map((item) => (
        <TodoItem todoDate={item.dueDate} todoname={item.name}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
