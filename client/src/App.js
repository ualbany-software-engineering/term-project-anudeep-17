import logo from './logo.svg';
import './App.css';
import { Login } from './login/login';
import Nav from './nav/nav';
import { useLocation, BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Nav />
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
      </Routes>
    </BrowserRouter></>
  );
}

export default App;
