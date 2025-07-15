import AppName from "./components/AppName";
import "./app.css";
import TodoItems from "./components/TodoItems";
import AddTodo from "./components/AddTodo";
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2024",
    },
    {
      name: "goto collage",
      dueDate: "4/10/2024",
    },
    {
      name: "like it",
      dueDate: "4/10/2024",
    },
  ];
  return (
    <center class="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
