import style from "./TodoItem.module.css";
function TodoItem({ todoname, todoDate }) {
  return (
    <>
      <div className={`${style.myRow} row`}>
        <div className="col-6">{todoname}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className={`${style.myButton} btn btn-danger`}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
