import Button from './Button'
import styles from "./app.module.css"
function App() {
  return (
    <div className="App">
      <h1 className = {styles.title}>Welcome back!!</h1>
      <Button text={"Hello"}/> 
    </div>
  );
}

export default App;
