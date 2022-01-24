import {BrowserRouter as Router, Routes, Route,} from "react-router-dom"
import SyncTemp from "./components/SyncTemp";
import Detail from "./routes/Detail";
import Home from "./routes/Home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Home/>} /> {/* default path */}        
        <Route path="/movie/:id" element = {<Detail/>} /> {/* dynamic Url*/}
        <Route path="/temp" element = {<SyncTemp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
