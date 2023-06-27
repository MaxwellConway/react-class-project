import { useState } from "react";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <div className="flex">
        <Nav />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
