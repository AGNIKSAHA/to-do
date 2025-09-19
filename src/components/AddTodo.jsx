import style from "./AddTodo.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useRef } from "react";
function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();
  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };
  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  // };
  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };
  return (
    <form className={`${style.myRow} row`} onSubmit={handleAddButtonClicked}>
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter todo here"
          ref={todoNameElement}
        />
      </div>
      <div className={`col-4`}>
        <input type="date" ref={dueDateElement} />
      </div>
      <div className="col-2">
        <button type="submit" className={`${style.myButton} btn btn-success`}>
          <IoIosAddCircleOutline />
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
