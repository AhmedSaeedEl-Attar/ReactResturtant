import "./App.css";

import { React, Fragment } from "react";
import NavB from "./components/Navs/Nav";
import Home from "./components/Home/Home"

function App() {
  return (
    <Fragment>
     <NavB/>
     <Home/>
    </Fragment>
  );
}

export default App;
