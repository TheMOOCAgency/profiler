import React from "react";
import ProfilerApp from "./container/profiler-app/ProfilerApp";

const App = () => {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100vw"
      }}
    >
      <ProfilerApp />
    </div>
  );
};

export default App;
