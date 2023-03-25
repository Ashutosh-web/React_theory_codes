import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./Header";
import Body from "./Body";
import Footer from "./Footer";

// 1. This is called named import : import { Title,Header } from "./Header";
// 2. This is called default import : import Header from "./Header";
// 3. Combination of imports : import Header,{Title} from "./Header;
// 4. We can import everything in a single reference : import * as Obj from "./Header;

const AppLayout = () =>{
    return (
        <>
        <Header/>
        {Body()}
        {Footer()}
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);