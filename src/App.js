import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './component/Home.js';
import Adduser from './component/Adduser.js';
import UserListing from "./component/UserListing.js";
import UpdateUser from "./component/UpdateUser.js";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='header'>
        <Link to={"/"}>Home</Link>
        <Link to={"/user"}>User</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/user" element={<UserListing />}></Route>
        <Route path="/user/add" element={<Adduser />}></Route>
        <Route path="/user/add" element={<UpdateUser />}></Route>
      </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
