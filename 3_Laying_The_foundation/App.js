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

//JSX codes : gets converted to react.createElement by babel
// this is a react element
const heading1 = (
  <h1 id="title1" key="h2">
    Namaste React!
  </h1>
);

const Heading2 = () => {
  return <h1>Namaste World!!</h1>;
};

//Funcational Components : just a noraml function which returns some JSX code
// below is an example of component composition
// We can use funcational components like <HeaderComponenet /> or {HeaderComponent()}
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
