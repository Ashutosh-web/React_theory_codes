<h3>1. What is emmet ?</h3>
<p>Emmet is a plugin used to auto-generate the code using shortcuts. eg. html:5</p>

<h3>2. Library Vs Framework</h3>
<p>un-opinonated and frameworks are opinonated.
Inversion of control happens in the framework.
framework calls the code written by developers , but libraries can be used anywhere with any code flow where developer wants to execute.
Both are piece of code only
</p>

<h3>3. What is CDN</h3>
<p>CDNs are geographically distributed group of servers used to serve file like html,css,images and videos.
Little different from traditional servers . Unlike traditional servers you can not do DB updates like insert,delete,updates and CDN Rest aPI calls.
</p>

<h3>4. CORS - Cross Origin Resource Sharing</h3>
<p>crossorigin : more to discover !!!</p>

<h3>5. React Vs REactDOM ?</h3>
<p>
React CDN gives the core funcationalities of react like creation of components. [ this will help so that core funcationalities can be shared acroos various platforms]
ReactDOM provides more of the DOM related funcationalies mainly related for web applications. 
</p>

<h3>6. Difference b/w Async and Defer ?</h3>
<p>
Both are the ways which talk about how the script source files are loaded to client side and executed while redering of the web app.
In Asysn while html files is being loaded, scripts are downloaded in parallel, once download is completel file it will execute the script.
In Defer while html file is being parsed, scripts are downloaded in paralled , can be executed once the html parsing is completed.
<br/><b>Use Cases</b>
Async can be used when seq. of execution does not matter . Eg : Some Analytics related libraries., or not depending on any other methods.
Defer can be used where seq. of execution matters.
</p>
