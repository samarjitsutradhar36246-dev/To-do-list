function TodoItem({ todoname, tododate }) {
  return (
    <div class="row">
      <div class="col">{todoname}</div>
      <div class="col-md-auto">{tododate}</div>
      <div class="col col-lg-2">
        <button type="button" class="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
