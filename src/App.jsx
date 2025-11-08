import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./AppName";
import AddTodo from "./AddTodo";
import TodoItems from "./Todoitems";
import { useState } from "react";
import WelcomeMessege from "./WelcomeMessege";

function App() {
  const [todoItems, settodoItems] = useState([]);
  const HandleNewItem = (itemName, itemDueDate) => {
    console.log(`New item added ${itemName} and ${itemDueDate}`);
    const newTodoItems = [...todoItems, { name: itemName, date: itemDueDate }];
    settodoItems(newTodoItems);
  };
  const handledeleteitem = (todoitemname) => {
    const newTodo = todoItems.filter((item) => item.name !== todoitemname);
    settodoItems(newTodo);
    console.log(`Item deleted ${todoitemname}`);
  };
  return (
    <center className="todo-container">
      <AppName></AppName>

      <AddTodo onNewItem={HandleNewItem} />
      {todoItems.length === 0 ? <WelcomeMessege /> : null}

      <TodoItems todoitems={todoItems} ondeleteclick={handledeleteitem} />
    </center>
  );
}
export default App;
