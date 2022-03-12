import { useState } from "react";
import "./App.sass";

import { Grid } from "./components/grid/grid.component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid />
      </header>
    </div>
  );
}

export default App;
