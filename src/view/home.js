import React from "react";
import styled from "styled-components";
//components
import { Header } from "./components/header";
import { Plants } from "./components/plants";
import { Router } from "@reach/router";
import { PlantDetail } from "./components/plantDetail";

//

function Home() {
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

export { Home };
