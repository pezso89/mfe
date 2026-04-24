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

import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

import StoreProvider from "container/providers/StoreProvider";

const App = () => {
  const history = createMemoryHistory();

  const generateClassName = createGenerateClassName({
    productionPrefix: "au",
  });

  return (
    <StoreProvider>
      <StylesProvider generateClassName={generateClassName}>
        <Routes>
          <Route path="/signin" element={<SignIn onSignIn={() => {}} />} />
          <Route path="/signup" element={<SignUp onSignIn={() => {}} />} />
        </Routes>
      </StylesProvider>
    </StoreProvider>
  );
};

export default App;
