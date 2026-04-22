import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import React from "react";
import { createGenerateClassName, StylesProvider } from "@mui/styles";

const App = () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "ma",
  });

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <h4>Container app1</h4>
        <MarketingApp />
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
