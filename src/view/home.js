import React from "react";
// styled components
import styled, { ThemeProvider } from "styled-components";
// reach router
import { Router } from "@reach/router";
//import  theme constant
import { theme } from "../constant/theme";
// components
import { Header } from "../components/header";
import { Plants } from "../components/plants";
import { PlantDetail } from "../components/plantDetail";

const Main = styled.main`
  max-width: 1440px;
  background-color: ${props => props.theme.backgroundColor};
  margin: 0 auto;
`;

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main>
        <Router>
          <Plants path="/" />
          <PlantDetail path="detail/:plantId" />
        </Router>
      </Main>
    </ThemeProvider>
  );
}

export { Home };
