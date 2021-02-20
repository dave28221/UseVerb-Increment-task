import React, {useState} from "react";
import './App.css';


function App() {
  const [state, setState] = useState(0);
  function button({add,subtract}){
    return(
      <button onClick = {add}>{subtract}</button>
    );
  }
  
 
  function increment(){
   setState(state + 1);

  }

  function decrement(){
    if(state != 0){
      setState(state -1);
    }

  }

  return (
    <div className="App">
       <p></p>
        <button class ="add"onClick={increment}>{"Increment"}</button>
        <p class ="value">{state}</p>
        <button class ="subtract"onClick = {decrement}>{"Decrement"}</button>
    </div>

 
  );
}

export default App;

