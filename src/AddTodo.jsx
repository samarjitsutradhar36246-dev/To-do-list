import "./add.css";
import { IoMdAddCircle } from "react-icons/io";
import { useState, useRef } from "react";
function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const duedateElement = useRef();

  const handleAddbutton = () => {
    const todoName = todoNameElement.current.value;
    const duedate = duedateElement.current.value;

    todoNameElement.current.value = "";
    duedateElement.current.value = "";
    onNewItem(todoName, duedate);
  };
  return (
    <div className="row">
      <div className="col">
        <input
          type="text"
          ref={todoNameElement}
          placeholder="Enter Items"
        ></input>
      </div>
      <div className="col-md-auto">
        <input type="date" ref={duedateElement} />
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
