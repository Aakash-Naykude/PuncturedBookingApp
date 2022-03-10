import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Componanats/Home/Home";
import GoogleApiWrapper from "./Componanats/Location/Location";
import Login from "./Componanats/Login/Login";
import Navbar from "./Componanats/Navbar/Navbar";
import Shops from "./Componanats/Shops/Shops";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/location" element={<GoogleApiWrapper />}></Route>
        <Route path="/shops" element={<Shops />}></Route>
      </Routes>
    </div>
  );
}

export default App;
