import React from "react";

import NotFound from "./not-found";
import Auth from "./auth";
import Footer from "./footer";

const App = () => {
  const [page, setPage] = React.useState(true);

  const navigator = () => {
    if (page) {
      return <Auth setPage={setPage} />;
    } else {
      return <NotFound setPage={setPage} />;
    }
  };

  return (
    <div className="app">
      {navigator()}
      <Footer setPage={setPage} />
    </div>
  );
};

export default App;
