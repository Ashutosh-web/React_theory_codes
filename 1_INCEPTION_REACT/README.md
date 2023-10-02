<h3>1. What is emmet ?</h3>
<p>Emmet is a plugin used to auto-generate the code using shortcuts. eg. html:5</p>

<h3>2. Library Vs Framework</h3>
<p>un-opinonated and frameworks are opinonated.
Inversion of control happens in the framework.
framework calls the code written by developers , but libraries can be used anywhere with any code flow where developer wants to execute.
Both are piece of code only<br/>
A library is a collection of pre-written code that we can include in our own code to help us perform certain tasks. It is essentially a set of tools that we can use to make our programming job easier. A library is typically more flexible and modular, allowing us to use just the parts we need and leave out the rest.

A framework, on the other hand, is a more opinionated, pre-structured way of building applications. It provides a set of guidelines, conventions, and tools that dictate how the application should be built. A framework is typically more prescriptive, dictating the overall architecture and organization of the code, and often requiring developers to follow specific patterns and conventions in order to use the framework effectively.

In general, a library is a set of tools that you can use to solve specific problems, while a framework is a set of guidelines and conventions for building a complete application.

</p>

<h3>3. What is CDN ?</h3>
<p>CDNs are geographically distributed group of servers used to serve file like html,css,images and videos.
Little different from traditional servers . Unlike traditional servers you can not do DB updates like insert,delete,updates and Rest API calls.
There are several reasons why CDNs are used:
Improved performance: By serving content from a location that is closer to the user, a CDN can reduce the time it takes for a webpage to load, which can improve the overall performance and user experience of a website or application.
Increased scalability: CDNs can handle sudden spikes in traffic, which can help prevent a website or application from going down in the event of a traffic surge.
Improved security: CDNs can also provide additional security by helping to protect against malicious attacks such as DDoS (Distributed Denial of Service) attacks.
Reduced bandwidth costs: CDNs can reduce the amount of bandwidth needed to serve content to users, which can help to lower hosting costs for websites and applications.
Overall, CDNs are an important tool for improving the performance, scalability, security, and cost-effectiveness of websites and applications.
</p>

<h3>4. CORS - Cross Origin Resource Sharing ?</h3>
<p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers. It has three parts of this mechanism, a. preflight call , then confirmation of that call i.e Access - control Allow origin is a way and third is main http request ( post , get , etc. ) </p>

<h3>5. React Vs REactDOM ?</h3>
<p>
React CDN gives the core functionalities of react like creation of components. [ this will help so that core funcationalities can be shared acroos various platforms]
ReactDOM provides more of the DOM related funcationalies mainly related for web applications. 
</p>

<h3>6. Difference b/w Async and Defer ?</h3>
<p>
Both are the ways which talk about how the script source files are loaded to client side and executed while redering of the web app.
In Async while html files is being loaded, scripts are downloaded in parallel, once download is completed for script file, it will execute the script.
In Defer while html file is being parsed, scripts are downloaded in paralled , can be executed once the html parsing is completed.
<br/><b>Use Cases : </b>
Async can be used when seq. of execution does not matter . Eg : Some Analytics related libraries., or not depending on any other methods.
Defer can be used where seq. of execution matters.
</p>

<h3>7. Why is React known as React?</h3>
<p>
React is a JavaScript library for building user interfaces that was developed by Facebook. It is known as React because it was designed to be a reactive system, meaning that it is designed to respond to changes in data by re-rendering the appropriate components in the user interface. The name "React" is short for "responsive," which reflects this core design principle.
</p>

<h3> 8. what is the difference b/w CDN link of production and development <h3>
<p>
    Production CDN links are minified and optimized version of React, which helps in efficient rendering of the react component
</p>

<h3> 9. What is arrow functions in JS ? </h3>
<p>
 const sum = (a,b) => return a + b   OR  const sum = (a,b) => a + b  OR const sum = async (a,b) => a + b; 
</p>

<h3> 10. Root.render(heading)   </h3>
<p>IT basically replace whatever present in the root DOM , it does not append , it replaces</p>