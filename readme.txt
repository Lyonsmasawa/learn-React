React is a Javascript library used to crease interactive websites
- allows us to easily create SPA - single page application
- an SPA is where the server sends a single page html to the browser for the app to run fully and then React takes over
& manages the whole website in the browser i.e. routing, data, interactivity without any input from the server to mean
our pages load faster

INSTALL SIMPLE REACT SNIPPETS FOR AN EASY TIME
        -sfc - creates a stateless functional component

create an app
- easiest it to use a command line tool - create react app -generates a start app with all needed setup instead of doing it ourselves - need {node} for this
        -npx create-react-app name

        ----- structure ------
        node_modules - where all our project dependencies live, including react library and any other library we install will live, we don't need to go inside it 

        public - where all the files public to the browser lives including the index.html file(this is the one html file that is served to the browser and all our react code is injected into it)
                we rarely go in here.

        src - 99% of the code you write will live here, we have one component created for us APP.js, we have index.js file - kickstarts our app, mounts all our react components to the DOM(in that root div in index html)

        package.json - lists all the dependencies our app depends on which live in node modules, we also have scripts to test, build, eject, start - npm run start


n/b
- React.StrictMode => does additional checks during dev and gives us warning if any

// create node_modules - when you have none in a react project from somewhere because node_modules is to big it is not uploaded to github
- npm install - looks through package.json and installs all dependencies


                                      - - - - - - - - COMPONENTS - - - - - - - - 
                                just a function that returns a jsx template and it is exported at the bottom of the file

        Components - building blocks and beating heart of every react application
        - a typical react app is made up of several components where each component is a self contained component,
        as developers we create components which are rendered to the DOM and shown in webPage by React.
        - 
                component tree
                ROOT COMPONENT - App.js - the rest are nested inside this root component e.g Navbar.js

        - components contain - Template(html) and logic(js)

                        ------ JSX templates -----

        - allows us to easily create these html styled templates and components and in the background a transpiler called babel converts this to html  
        - function has to start with a capital Letter
        - as we add classes to html elements using class we add classes to JSX using className -camelCase - THEN when converted to html it translates to class
        - we can output dynamic values/variables
        - react converts WHATEVER DATATYPE WE USE TO A STRING, the only thing we cant output are objects and booleans