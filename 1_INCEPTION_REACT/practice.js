const heading = document.createElement('h1');
heading.innerHTML = 'Namaster React';

const root = document.getElementById('root');
root.appendChild(heading);

// above code will insert a h1 tag inside my root element

// above is the traditional way to create an element or injecting a new element

 const heading1 = React.createElement('h1',{},"Namaste React");
 const root1 = ReactDOM.createRoot(root);
 root1.render(heading1);

 // react.createElement is very much react property
 // REACTDOM is related to web properties


 const heading2 = React.createElement('h2',{},"Namaste React 2 ");
 const root2 = ReactDOM.createRoot(root);
 root2.render(heading2);