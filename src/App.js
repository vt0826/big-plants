import React from "react";
import "./App.css";

//components
import { Header } from "./components/header";
import { Plants } from "./components/plants";
import { Router } from "@reach/router";
import { PlantDetail } from "./components/plantDetail";

function App() {
  return (
    <>
      <Header />
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
