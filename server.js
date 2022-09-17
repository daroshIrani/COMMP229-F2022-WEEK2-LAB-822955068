const connect = require('connect');
const app = connect();
const objectJson = {"message":"Hello from NodeJS Application as json "};

function logger(req,res,next){
    console.log(req.method, req.url);

    next();
};

function helloWorld(req,res,next){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from NodeJS Application');

    next();
};

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

app.use('/json', helloWorldJSON);
app.use('/html', helloWorldHtml);
app.use(logger);
app.use('/',helloWorld);
app.listen(3000,'10.0.0.39');