function TodoItem({ todoname, todoDate }) {
  return (
    <div>
      <div className="row myRow">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger myButton">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
