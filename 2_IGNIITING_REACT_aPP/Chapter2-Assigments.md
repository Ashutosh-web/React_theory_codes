# Theory Assigments of Chapter 2

1. What is NPM ? <br/>
   Npm is the software registry. It is used to import open source packages from public repositories of javascript libraries. It consists of three
   distinct components i.e the website , command line and the registry.<br/>
   It is not node package manager !!!!

2. What is package.json and package-lock.json ? <br/>
It is a configuration file of our project, it manages the packages/dependencies basically the js code. 
It keeps the exact version of the package being installed and it also keeps tracks of the other dependencies which gets installed
with it. ( which is called <h3>Transitive dependency</h3> ) 

3. What is parcel/webpack ? <br/>
It helps to bundle/compressed/minified/optimize our code before sending it to production in short make it production ready.


4. What is '.parcel-cache' and 'dist' folder? <br/>

5. What is differenece b/w dependencis and Dev-dependecies? <br/>
npm install -D parcel  : Installing as a Dev dependency requred for development and testing purposes
npm install react      : Installing as dependeny which will be required for production also and for working of our application.


6. What are the superpowers of parcel ? <br/>
7. What is '.gitignore' ? WHAT SHOULD we add it and not add it ? <br/>
All the non-essentials things which can be regenerated again. Even password and API keys should not be pushed to the github

8. What is difference b/w package.json and package-lock.json ? <br/>
9. What is browserList ? <br/>
10. What is the difference b/w Vite , Webpack and parcel ? <br/>
11. ^  caret and ~ tilda in package.json ? <br/>
~version “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

^version “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to <2.0.0


12. What are different script type in html tag ? <br/>
 -- normal browser script
 -- type ='module'
 
13. After creating a start script in package.json ? <br/>
    eg. : "start" : "parcel index.html"
    Now, to run this we need to run command : npm run start or npm start
    w/o this we can also use : npx parcel index.html
    Here we are creating development build

14. After creating a build script in package.json ? <br/>
    eg. : "build" : "parcel build index.html"
    Now, to run this we need to run command : npm run build
    w/o this we can also use : npx parcel build index.html
    Here we are creating a build for production

15. What is npx ?
IT is used for executing the package
npm + package name
eg : npx parcel index.html , npx parcel build index.html

16. npm install and npm i both are same

17.Browser List 
Basically used for making our app compatible with different browsers versions, even we can use it to restrict for certain countries as well

