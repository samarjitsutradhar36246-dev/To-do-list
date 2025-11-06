import TodoItem from "./Todoitem";
const TodoItems = ({ todoitems }) => {
  return (
    <>
      <div className="items-container">
        {todoitems.map((items) => (
          <TodoItem todoname={items.name} tododate={items.date} />
        ))}
      </div>
    </>
  );
};
export default TodoItems;
