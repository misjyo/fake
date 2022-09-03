// import logo from './logo.svg';
import "./App.css";
import { Register } from "./component/Register";
import { Login } from "./component/Login";
import { Route, Routes } from "react-router-dom";
import { Header } from "./component/Header";
import { Addemployee } from "./employee/Addemployee";
import { Viewemployee } from "./employee/Viewemployee";



function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addemp" element={<Addemployee/>} />
          <Route path="/viewemp" element={<Viewemployee/>} />
         
        </Routes>
      </div>
    
    </>
  );
}

export default App;
