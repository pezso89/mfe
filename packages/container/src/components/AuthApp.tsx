import React from "react";
import Progress from "./Progress";
const App = React.lazy(() => import("auth/AuthApp"));

const AuthApp = () => {
  return (
    <React.Suspense fallback={<Progress />}>
      <App />
    </React.Suspense>
  );
};

export default AuthApp;
