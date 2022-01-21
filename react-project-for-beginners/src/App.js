import Button from './Button'
import styles from "./App.module.css"
import {useState, useEffect} from "react";



function App() {

  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo===""){
      return;
    }else{
      // toDos.push("Don't do That!!"); //Don't do that!!
      setToDos((prev) => [toDo , ...prev]);
      setToDo(""); 

    }
  }
  useEffect(()=>{
    console.log(toDos);
    console.log(toDos.map((value, index) => {
      return <li key={index}>{value}</li>
    }));
  },[toDos]);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
          <input type="text" placeholder = "Write your to do..." value={toDo} onChange={onChange} />
          <button>Add To Do!</button>
      </form>
      <hr/>
      {/* {toDos.forEach((value, index) => {
        return <h3 key={index}>{value}</h3>
      })} */}

      <ul>
        {toDos.map((value, index) => {
          return <li key={index}>{value}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
