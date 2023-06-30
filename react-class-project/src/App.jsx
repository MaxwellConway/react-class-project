import { useState } from "react";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <div className="flex h-100vh">
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
