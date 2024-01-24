import React from "react";
import Header from "./components/header/header";
import Router from "./components/router/router";
import Footer from "./components/footer/footer";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
