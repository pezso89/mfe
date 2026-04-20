
import React from "react";
const App = React.lazy(() => import("marketing/MarketingApp"));

const MarketingApp = () => {
  return (
    <React.Suspense fallback="Loading...">
      <App />
    </React.Suspense>
  );
};

export default MarketingApp;
