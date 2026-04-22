import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import React from "react";
import { createGenerateClassName, StylesProvider } from "@mui/styles";
import Header from "./components/Header";

const App = () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "ma",
  });

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header signedIn={true} onSignOut={() => {}} />
        <MarketingApp />
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
