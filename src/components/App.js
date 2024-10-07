
import React ,{useState} from "react";
import './../styles/App.css';
import { BrowserRouter,Link,Route,Routes } from "react-router-dom";
import Login from "./Login";
import Playground from "./Playground";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  const [login,setLogin]=useState(false);
  return (
    <div className='main-container'>
        {/* Do not remove the main div */}
        <BrowserRouter>
        <p>{login?'Logged in,Now you can enter Playground':'You are not authenticated,Please login first'}</p>
        <ul>
          <li><Link to='/playground'>PlayGround</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
        
        <Routes>
          <Route path="/login" element={<Login login={login} setLogin={setLogin}/>}></Route>
          <Route path="/playground" element={<PrivateRoute element={<Playground />}  login={login} />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
