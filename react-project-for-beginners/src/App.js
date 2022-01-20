import Button from './Button'
import styles from "./App.module.css"
import {useState, useEffect} from "react";
function App() {
  const [counter,setCounter] = useState(0);

  useEffect(() =>{
    console.log("Render!!!");
  },[counter])
  const onClick = () => {
      setCounter((prev) => prev + 1);
  }
  return (
    <div className="App">
      <h1>{counter}</h1> 
      <button onClick = {onClick}> click me</button>
    </div>
  );
}

export default App;
