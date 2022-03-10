import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Componanats/Cart/Cart";
import Home from "./Componanats/Home/Home";
import GoogleApiWrapper from "./Componanats/Location/Location";
import Login from "./Componanats/Login/Login";
import Navbar from "./Componanats/Navbar/Navbar";
import Shops from "./Componanats/Shops/Shops";
import ShopsDetails from "./Componanats/Shops/ShopsDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/location" element={<GoogleApiWrapper />}></Route>
        <Route path="/shops" element={<Shops />}></Route>
        <Route path="/shops/:id" element={<ShopsDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
