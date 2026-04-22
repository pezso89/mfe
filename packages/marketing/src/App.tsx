import React from "react";
import {
  Routes,
  Route,
  Router,
  MemoryRouter,
  BrowserRouter,
} from "react-router-dom";
import { createMemoryHistory } from "history";
import { StylesProvider, createGenerateClassName } from "@mui/styles";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const App = () => {
  const history = createMemoryHistory();

  const generateClassName = createGenerateClassName({
    productionPrefix: "ma",
  });

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </StylesProvider>
  );
};

export default App;
