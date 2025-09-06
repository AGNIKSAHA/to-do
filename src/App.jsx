import AppName from "./components/AppName";
import "./app.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Welcome from "./components/Welcome";
function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`new item added: ${itemName} date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };
  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo onNewItem={handleNewItem}></AddTodo>
        {todoItems.length === 0 && <Welcome></Welcome>}
        <TodoItems todoItems={todoItems}></TodoItems>
      </center>
    </>
  );
}

export default App;
