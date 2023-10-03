import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//     key: "h1",
//   },
//   "Namste World!"
// );

// JSX codes : gets converted to react.createElement by babel
// JSX is not react , JSX makes our life easier. It is a HTML like syntax, it is not HTML
// This is a react element, at end of the day it is a javascript object
// JSX ( transpiled before it reaches the JS , converts in ECMA ) version, It is done by babel which gets installed while installing the parcel, converting it into browser
// compatible code
// JSX ==> React.CreateELement => ReactElement - This is a JS object ==> Finally this is rendered as a HTML element

// we need to wrap it in () , if writing the JSX code in multiple lines
const heading1 = (
  <h1 id="title1" key="h2">
    Namaste React!
  </h1>
);

const Heading2 = () => {
  return <h1>Namaste World!!</h1>;
};

const Heading3 = <h3>Heading 3</h3>;


// Funcational Components : just a noraml function which returns some JSX code / expression
// name of functional components should start with Capital letter, it is a convention
// below is an example of component composition
// We can use functional components like <HeaderComponenet /> or {HeaderComponent()}
const HeaderComponent = () => {
  return (
    <div>
      {heading1} 
      {Heading2()}
      <Heading2 />
      <h1>Line 1</h1>
      <h2>Line 2</h2>
    </div>
  );
};
// little shorcut way of writing functional components without return statement
const HeaderComponent1 = () => (
  <div>
    <h1>Line 3</h1>
    <h2>Line 4</h2>
  </div>
);

//heading is a react element which is basically a object and React.createElement is method that creates a DOM object
console.log(heading);

//ReactDOM.createRoot is creating a root element
const root = ReactDOM.createRoot(document.getElementById("root"));

//parsing a react element inside a root element
//root.render(heading); , giving just a react element in root.render
//root.render(heading1);

// for rendering a react functional component
root.render(<HeaderComponent1 />);

// came casing is used in React Element which is different from what we write in HTML 



/*

const heading = <h1 id="heading1">Hello</h1>;
const heading1 = (
  <div className = 'div-container'>
    <h1 className = 'h1-container'>Hello 1</h1>
    <h2 className = 'h2-container'>Hello 2</h2>
  </div>
)

-- properties to be written in Camel casing
-- Funcaitional component : it is just a js function m, which return some JSX expression or react element or group of react elements. 
-- Identifier should in Captial letter only
-- Component composition

const heading2 = () =>{
  return (
    <h2>heading 2</h2>
  )
}

const HeaderComponent = () => {
  retunr (
    <div>
      <h1></h1>
      {heading}
      {Heaing2}
      <Heading2/>
      {Heading2()}
    </div>
  )
}




*/