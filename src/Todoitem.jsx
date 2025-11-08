import { AiFillDelete } from "react-icons/ai";
import "./buttons.css";
function TodoItem({ todoname, tododate, ondeleteclick }) {
  return (
    <div className="row">
      <div className="col">{todoname}</div>
      <div className="col-md-auto">{tododate}</div>
      <div className="col col-lg-2">
        <button
          type="button"
          className="btn btn-danger buttons"
          onClick={() => ondeleteclick(todoname)}
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
