import React from "react";
import Header from "./components/header";
import Plants from "./components/plants";
import { Router } from "@reach/router";
import "./App.css";
import PlantDetail from "./components/plantDetail";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Router>
          <Plants path="/" />
          <PlantDetail path="detail/:plantId" />
        </Router>
      </main>
    </>
  );
}

export default App;
