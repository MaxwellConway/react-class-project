import { useState } from "react";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <div className="flex">
        <div>
          <Nav />
        </div>
        <div className="w-full">
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
