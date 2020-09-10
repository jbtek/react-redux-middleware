import React from "react";
import {BrowserRouter} from 'react-router-dom'
import "./styles.css";
import GlobalFont from './assets/fonts/GlobalFont'
import Routers from "./routers/Routers";
import DynamicRouters from "./routers/DynamicRouters";

let App = () => {
  return (
    <div className="App">
     <GlobalFont/>
     <BrowserRouter>
     <DynamicRouters/>
     </BrowserRouter>
    </div>

  );
}
export default App

