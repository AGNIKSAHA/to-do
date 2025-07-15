import style from "./AddTodo.module.css";

function AddTodo() {
  return (
    <div className={`${style.myRow} row`}>
      <div className="col-6">
        <input type="text" placeholder="Enter todo here" />
      </div>
      <div className={` col-4`}>
        <input type="date" />
      </div>
      <div className="col-2">
        <button type="button" className={`${style.myButton} btn btn-success`}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
