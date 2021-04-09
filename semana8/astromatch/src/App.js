import { useState } from "react";
import MatchPage from "./components/pages/MatchPage";
import ListMatchPage from "./components/pages/ListMatchPage";
import "./styles.css";
import React from "react";
import styled from "styled-components";

export default function App() {
  const [window, setWindow] = useState("listMatch");

  const chooseWindow = () => {
    switch (window) {
      case "match":
        return <MatchPage page={changeWindow} />;
      case "listMatch":
        return <ListMatchPage page={changeWindow} />;
      default:
        return <MatchPage page={changeWindow} />;
    }
  };

  const changeWindow = (windowName) => {
    setWindow(windowName);
  };

  return (
    <div className="App">
      <MainContainer>{chooseWindow()}</MainContainer>
    </div>
  );
}

const MainContainer = styled.div`
  margin: auto;
  width: 30%;
  border: 3px solid gray;
  padding: 5px;
  border-radius: 5px;
`;
