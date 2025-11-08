import TodoItem from "./Todoitem";

const TodoItems = ({ todoitems, ondeleteclick }) => {
  return (
    <>
      <div className="items-container">
        {todoitems.map((items) => (
          <TodoItem
            key={items.name}
            todoname={items.name}
            tododate={items.date}
            ondeleteclick={ondeleteclick}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
