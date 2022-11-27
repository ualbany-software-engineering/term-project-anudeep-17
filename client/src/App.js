import logo from './logo.svg';
import './App.css';
import { Login } from './login/login';
import Nav from './nav/nav';
import { useLocation, BrowserRouter, Routes, Route } from "react-router-dom";
import { Profiles } from './profiles/profiles';
import { Addpost } from './profiles/addpost';
import { Editprofile } from './profiles/editprofile';

function App() {
  return (
    <>
    
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Profiles/>} />
        <Route path="/Login" exact element = {<Login/>}/>
        <Route path="/add" exact element = {<Addpost/>}/>
        <Route path="/edit" exact element = {<Editprofile/>}/>
      </Routes>
    </BrowserRouter></>
  );
}

export default App;
