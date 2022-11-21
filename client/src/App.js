import logo from './logo.svg';
import './App.css';
import { Login } from './login/login';
import Nav from './nav/nav';
import { useLocation, BrowserRouter, Routes, Route } from "react-router-dom";
import { Profiles } from './profiles/profiles';

function App() {
  return (
    <>
    <Nav />
    <BrowserRouter>
      <Routes>
        <Route index element={<Profiles/>} />
        <Route path="/Login" element = {<Login/>}/>
      </Routes>
    </BrowserRouter></>
  );
}

export default App;
