import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@mui/styles";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <StylesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/pricing" element={<Pricing/>} />
        </Routes>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
