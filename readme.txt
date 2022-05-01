React is a Javascript library used to crease interactive websites
- allows us to easily create SPA - single page application
- an SPA is where the server sends a single page html to the browser for the app to run fully and then React takes over
& manages the whole website in the browser i.e. routing, data, interactivity without any input from the server to mean
our pages load faster

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