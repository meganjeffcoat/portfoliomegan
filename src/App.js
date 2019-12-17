import React from "react";


import "./App.css";

import Title from "./components/title";
import CurrentProjects from "./components/current-projects";
import Skills from "./components/skills";

function App() {
  return (
    <div className="App">

        <Title />
        <CurrentProjects />
        {/* <Skills />  */}

    </div>
  );
}

export default App;
