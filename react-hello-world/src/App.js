import './App.css';
import { useState } from 'react';

function App() {

  // STATE ARRAYS => React observes this thing here
  const [todos, setTodos] = useState([
    "Wake the cat", "Go out with the dog", "Clean the dishes", "New one"
  ]) 

  const addTodo = () => {
    console.log("AddTodo called...")
    
    // THIS line triggers a state update 
    // => and React will re-render the HTML below (in the return)!
    setTodos( [ ...todos, "The next one" ] )
    
    // todos.push( "The next one" ) // this does not work
    console.log( todos )
  } 

  // LAYOUT
  // JS + HTML => JSX
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hallo dudes</h2>
        {/* Javascript in HTML - crazy stuff... jaja.. */}
        { todos.map( todo => <div>{todo}</div> ) }
        <button onClick={ addTodo } >Add Todo</button>
      </header>
    </div>
  );
}

export default App;
