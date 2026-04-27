import React from "react";
import { Routes, Route } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@mui/styles";

import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const App = () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "au",
  });

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </StylesProvider>
  );
};

export default App;
