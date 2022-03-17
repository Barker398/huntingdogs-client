import React from "react";
import ReactDOM  from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { HuntingDogs } from "./HuntingDogs.js"
import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <HuntingDogs />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)