import style from "./AddTodo.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useState } from "react";
function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };
  return (
    <div className={`${style.myRow} row`}>
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter todo here"
          value={todoName}
          onChange={handleNameChange}
        />
      </div>
      <div className={`  col-4`}>
        <input type="date" value={dueDate} onChange={handleDateChange} />
      </div>
      <div className="col-2">
        <button
          type="button"
          className={`${style.myButton} btn btn-success`}
          onClick={handleAddButtonClicked}
        >
          <IoIosAddCircleOutline />
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
