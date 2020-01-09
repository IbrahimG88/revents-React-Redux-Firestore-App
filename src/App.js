import React from "react";
import logo from "./logo.svg";
import "./App.css";

import EventDashboard from "./features/event/EventDashboard/EventDashboard";

function App() {
  return (
    <div>
      <h1>Re-vents</h1>
      <EventDashboard />
  </div>
  );
}

export default App;

