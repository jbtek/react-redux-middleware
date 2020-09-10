import React from "react";
import {BrowserRouter} from 'react-router-dom'
import "./styles.css";
import GlobalFont from './assets/fonts/GlobalFont'
import Routers from "./routers/Routers";

let App = () => {
  return (
    <div className="App">
     <GlobalFont/>
     <BrowserRouter>
     <Routers/>
     </BrowserRouter>
    </div>

  );
}
export default App

