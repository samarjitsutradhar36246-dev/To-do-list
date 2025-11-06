import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./AppName";
import AddTodo from "./AddTodo";
import TodoItems from "./Todoitems";
import { useState } from "react";

function App() {
  const intial = [
    {
      name: "Buy Milk",
      date: "4/10/2025",
    },
    {
      name: "Go to College",
      date: "4/10/2025",
    },
    {
      name: "Do Assignments",
      date: "4/10/2025",
    },
  ];
  const [todoItems, settodoItems] = useState(intial);
  const HandleNewItem = (itemName, itemDueDate) => {};
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={HandleNewItem} />
      <TodoItems todoitems={todoItems} />
    </center>
  );
}
export default App;
