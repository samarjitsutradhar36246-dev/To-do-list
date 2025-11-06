function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();
  return (
    <div class="row">
      <div class="col">
        <input type="text" placeholder="Enter Items"></input>
      </div>
      <div class="col-md-auto">
        <input type="date" />
      </div>
      <div class="col col-lg-2">
        <button
          onClick={() => onNewItem()}
          type="button"
          class="btn btn-success"
        >
          Add
        </button>
      </div>
    </div>
  );
}
export default AddTodo;
