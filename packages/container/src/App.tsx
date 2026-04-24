import { BrowserRouter, Route, Routes } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import AuthApp from "./components/AuthApp";
import React from "react";
import { createGenerateClassName, StylesProvider } from "@mui/styles";
import Header from "./components/Header";
import StoreProvider from "./providers/StoreProvider";

const App = () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "ma",
  });

  return (
    <StoreProvider>
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
          <Header signedIn={false} onSignOut={() => {}} />
          <Routes>
            <Route path="/auth/*" element={<AuthApp />} />
            <Route path="/" element={<MarketingApp />} />
          </Routes>
        </StylesProvider>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default App;
