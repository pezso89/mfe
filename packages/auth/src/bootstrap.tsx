import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import StoreProvider from "container/providers/StoreProvider";

const mount = (el: Element) => {
  ReactDOM.createRoot(el).render(
    <StoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>,
  );
};

if (process.env.NODE_ENV === "development") {
  const root = document.querySelector("#_auth-dev-root");
  if (root) {
    mount(root);
  }
}

export { mount };
