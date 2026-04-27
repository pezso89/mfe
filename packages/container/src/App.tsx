import { BrowserRouter, Route, Routes } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import AuthApp from "./components/AuthApp";
import React from "react";
import { createGenerateClassName, StylesProvider } from "@mui/styles";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const App = () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "ma",
  });

  const isLoggedIn: boolean = useSelector((state: RootState) => {
    return state.auth.isLoggedIn;
  });

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header signedIn={isLoggedIn} onSignOut={() => {}} />
        <Routes>
          <Route path="/auth/*" element={<AuthApp />} />
          <Route path="/" element={<MarketingApp />} />
        </Routes>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
