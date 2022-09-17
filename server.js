const connect = require('connect');// Importing the connect module 
const app = connect();//assgning its fucntionailty to tha app constant so we can manipulate its functioality later
const objectJson = {"message":"Hello from NodeJS Application as json "};// just an object in json format to use later

function logger(req,res,next){
    console.log(req.method, req.url); // logger f'n 

    next();
};

function helloWorld(req,res,next){// first function recieving the request and repsonse parameters for the function to manipulate in the function later
    res.setHeader('Content-Type', 'text/plain');// repsonse object function to describe the output format for repsonse header
    res.end('Hello from NodeJS Application');// response ping is closed with this text

    next();
};

// Usage of the function's parameters request and response are same as above - only difference is the output type declaration and actual output being put on screen when
// the specific url's header is changed

function helloWorldHtml(req,res,next){
    res.setHeader('Content-Type', 'text/html');
    res.end("<h1> Hello from NodeJS Application as HTML <h1>");
    next();
};

function helloWorldJSON(req,res,next){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(objectJson,));
    next();
};

// Below here, the app constant storing the connect constant as a function is used as a function
app.use('/json', helloWorldJSON);// app.use ('header redirect (for lack of a better word), fucntion to be run)
app.use('/html', helloWorldHtml);// app.use ('header redirect (for lack of a better word), fucntion to be run)
app.use(logger);// logger function is run here
app.use('/',helloWorld);// app.use ('header redirect (for lack of a better word), fucntion to be run)
app.listen(3000,'10.0.0.39');// node.js is listening to the web app on port 3000 at the localhost ip which i physically defined here 