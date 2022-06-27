import './App.css';
import React, {useState} from 'react';

function App() {
  // first values of the todo list
  const [todos, setTodos] = useState([
    { name: "Buy shopping", priority: "high" },
    { name: "Clean bathroom", priority: "low" },
    { name: "Car's MOT", priority: "high" }
  ]);

  const priority1 = "high";
  const priority2 = "low";

  //  create new todo
  const [newTodo, setNewTodo] = useState("", "");

  //  each line of todo items
  const todoNodes = todos.map((todo, index) => {
    return (
    <li key={index}>
      <span className={todo.priority == "high" ? "high-priority" : "low-priority"}>{todo.name}</span>
    </li>
    )
  })

  //  handle inputs for new todo
  const handleTodoInput = (evt) => {
    setNewTodo(evt.target.value);
  }

  //  handle radio buttons for new todo
  const handleTodoRadioButtons = (evt) => {
    return evt.target.value
  }

  // save new todo
  const saveNewTodo = (evt) => {
    evt.preventDefault();
    const copyTodos = [...todos];
    copyTodos.push({name: newTodo, priority: "low"});
    setTodos(copyTodos);
    setNewTodo("");
  }
  
  //  component
  return (
    <div>

      <h1>ToDo List</h1>

      <form onSubmit={saveNewTodo}>
        <label htmlFor="new-todo"/>
        <input id="new-todo" type="text" value={newTodo} onChange={handleTodoInput}/>

        <label htmlFor='new-todo'>High</label>
        <input type="radio" id="high" name="priority" value="high" required/>
        
        <label htmlFor='new-todo'>Low</label>
        <input type="radio" id="low" name="priority" value="low" required/>

        <input type="submit" value="Save Item"/>
      </form>

      <ul>
        {todoNodes}
      </ul>

    </div>
  );
}

export default App;