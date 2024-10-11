import AddTodo from "./Components/AddTodo";
import Todo from "./Components/Todo";
import TodoItem1 from "./Components/TodoItem1";
import TodoItem2 from "./Components/TodoItem2";
import "./App.css";

function App() {
  return (
    <center className="center-container">
      <Todo/>
        <AddTodo/>
        <TodoItem1/>
        <TodoItem2/>
    </center>
  );
}

export default App;
