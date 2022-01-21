import Button from './Button'
import styles from "./App.module.css"
import {useState, useEffect} from "react";
function App() {
  const [counter,setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  useEffect(() =>{
    console.log("i run the first time");
  
  },[])
  const onClick = () => {
      setCounter((prev) => prev + 1);
  }
  useEffect(() => {
    console.log("Search for",keyword);
  },[keyword])

  const onChange = (event) => setKeyword(event.target.value);
  const clickSearch = () => {
    console.log(keyword);
  }
  console.log("i run all the time");
  // console.log("Search for",keyword);

  return (
    <div className="App">
      <input type="text" placeholder="Search here..." value = {keyword} onChange = {onChange} />
      <button onClick={clickSearch}>Search!!</button>
      <h1>{counter}</h1> 
      <button onClick = {onClick}> click me</button>
    </div>
  );
}

export default App;
