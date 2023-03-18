import React from "react";
import StoreNavbar from "./components/StoreNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { List } from "./components/List";
import "./App.css";
import { Cart } from "./components/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <StoreNavbar />
        <h1>App</h1>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
