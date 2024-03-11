// Import React, React Router DOM, and some components
import React from "react";
import { BrowserRouter, Routes, Route, Link ,Outlet} from "react-router-dom";
import Navbar from "./components/Navbar";

// Define a function component that renders the app
function App() {
  return (
    <div id="detail">
      <Navbar/>
    <Outlet />

  </div>
  );
}

// Export the app component
export default App;
