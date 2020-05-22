import React from "react";
import FetchData from "./FetchData";
import "./App.css";
import Recipe from "./components/Recipe";

function App() {
  return (
    <div className="App">
      <header className="page-header">
        <h1 className="app-title">Recipe Search</h1>
      </header>
      <FetchData />
    </div>
  );
}

export default App;
