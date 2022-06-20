import React, {useEffect} from "react"
import logo from "./logo.svg";
import "./App.css";
// import Center from "./components/center";
// import { folder } from "./components/FolderConstants";
// import FolderStructure from "./components/FolderStructure";
// import Resize from "./components/Resize";
// import {makeRandomAPICall} from "./components/CallApi";
import StaticComp from "./components/StaticComp";
import Quote from "./components/Quote/Quote";
import Material from "./components/Material";

//RUN - cd first-app;  npm start

function App() {
    return (
        <section>
            {/* <Quote/> */}
            {/* <StaticComp /> */}
            <Material />
        </section>
    );
}

export default App;
