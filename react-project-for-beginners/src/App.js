import Button from './Button'
import styles from "./App.module.css"
import {useState, useEffect} from "react";

function Hello(){
  
  useEffect(()=>{
      console.log("I'm created!")
      return () => {console.log("I'm destroyed!!");}
  },[])
  return <h1>Hello</h1>;
} 


function App() {
  const [showing, setShowing] = useState(false);
  useEffect(()=>{
    if(showing){
      setTimeout(() =>setShowing(false), 1000);
    }
  },[showing]);
  const onClick = () => setShowing((prev) => !prev); //setState함수의 인자로 함수로 넘겨줄 때 변수명이 똑같을 필요가 없다..!!

  return (
    <div className="App">
      <button onClick={onClick}>{showing? "Hide" : "Show"}</button>
      {showing? <Hello/> : ""}
    </div>
  );
}

export default App;
