import React from "react";
import ReactDOM from "react-dom/client";

/*
 * HMR : Hot module replacement
 * File watcher algorithm : c++
 * Super fast build production
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * Image optimization
 * HTTPS on dev
 * It manages the port no : If we are developing the two or more projects concurrently
 * It uses consistent hashing algorithm
 * Zero Configuration bundler,optimizer and minifying
 * Transitive dependencies : sub dependencies of main dependendencies
 * Polyphill
 * It creates a server for us
 * Tree Shaking : Removing un-wanted code
 */

const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Namste World!"
);

const heading1 = React.createElement(
  "h2",
  {
    id: "title-desc",
  },
  "By Ashutosh Kumar"
);

const container = React.createElement("div", null, [heading, heading1]);

//heading is a react element which is basically a object and React.createElement is method that creates a DOM object
console.log(heading);

//ReactDOM.createRoot is creating a root element
const root = ReactDOM.createRoot(document.getElementById("root"));

//parsing a react element inside a root element
//root.render(heading);
root.render(container);
