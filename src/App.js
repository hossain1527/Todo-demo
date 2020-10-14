import React, { useState } from 'react';
import TodoList from './TodoList';


const App = () => {
  const [initialInput, setInitialInput] = useState(""); //Creating hooks
  const [item, setItem] = useState([]); // Creating hooks to add items

  const inputEvent = (event) =>{
    setInitialInput(event.target.value);
  }

  const addItems = () => {
    setItem ((itemprev) => {
     return [...itemprev, initialInput];
    });
    setInitialInput('');
  };
  
  const deletTodoItem = (id) => {
    console.log('deleted');

    setItem((itemprev) => {
      return itemprev.filter((arrayItem,index) => {
       return index !== id;
      })
    })
}

  return (
  <>
  <div className="main">

    <div className="container">
      <h2>My ToDo List</h2>
      <input type="text" value={initialInput} placeholder= "Add details" onChange={inputEvent}/>
      <button onClick={addItems}>Add</button>

       <ul>
        
       {item.map ( (itemvalue, index) => {
        return <TodoList listv={itemvalue} key={index} id={index} onSelect={deletTodoItem} />;
       })}
         
       </ul>
    </div>

  </div>
  </>
  );
};

export default App;
