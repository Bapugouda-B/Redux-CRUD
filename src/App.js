import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './component/Home.js';
import Adduser from './component/Adduser.js';
import UserListing from "./component/UserListing.js";
import UpdateUser from "./component/UpdateUser.js";
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Store from '../src/Redux/Store.js';

function App() {
  return (
    <Provider store={Store} >
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
        <Route path="/user/update/:id" element={<UpdateUser />}></Route>
      </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
    </Provider>
  );
}

export default App;
