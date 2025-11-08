import "./add.css";
import { IoMdAddCircle } from "react-icons/io";
import { useState } from "react";
function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [duedate, setduedate] = useState();
  const handleNamechange = (event) => {
    setTodoName(event.target.value);
  };
  const handledatechange = (event) => {
    setduedate(event.target.value);
  };
  const handleAddbutton = () => {
    onNewItem(todoName, duedate);
    setTodoName("");
    setduedate("");
  };
  return (
    <div className="row">
      <div className="col">
        <input
          type="text"
          placeholder="Enter Items"
          onChange={handleNamechange}
          value={todoName}
        ></input>
      </div>
      <div className="col-md-auto">
        <input type="date" onChange={handledatechange} value={duedate} />
      </div>
      <div className="col col-lg-2">
        <button
          onClick={handleAddbutton}
          type="button"
          className="btn btn-success add"
        >
          <IoMdAddCircle />
        </button>
      </div>
    </div>
  );
}
export default AddTodo;
