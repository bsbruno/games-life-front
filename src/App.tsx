import React from "react";
import Routes from "../src/routes/index";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "../src/hooks/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppProvider>
          <Routes />
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
