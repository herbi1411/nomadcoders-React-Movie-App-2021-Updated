import {BrowserRouter as Router, Routes, Route,} from "react-router-dom"
import SyncTemp from "./components/SyncTemp";
import Detail from "./routes/Detail";
import Home from "./routes/Home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element= {<Home/>} /> {/* default path */}        
        <Route path={`${process.env.PUBLIC_URL}/:id`} element = {<Detail/>} /> {/* dynamic Url*/}
        <Route path={`${process.env.PUBLIC_URL}/temp`} element = {<SyncTemp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
