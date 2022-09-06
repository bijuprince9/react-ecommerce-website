import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainBody from "./components/MainBody/MainBody";
import Home from "./components/Home/Home";
import AddProductForm from "./components/AddProductForm/AddProductForm";

function App() {
  return (
    <Router>
      <Header />

      <div>
        
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Home" element={<MainBody />}></Route>
          <Route exact path="/AddProduct" element={<AddProductForm/>}></Route>
        </Routes>
        
      </div>

      <Footer />
    </Router>
  );
}

export default App;
