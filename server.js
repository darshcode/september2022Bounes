//import third party nodejs module connect
const connect = require('connect');

//initiate server app
const app = connect();


//middle man/ ware
function helloWorld(req, res, next){
  res.setHeader('Content-type', 'text/plain');
res.end('hello from nodeJs Application.');  
}

function htmlFunc(req, res, next){
    res.setHeader('Content-type', 'text/html');
  res.end('<h1>Evening world</h1>');  
  }




  //middle ware

app.use('/htmlF', htmlFunc);
app.use('/', helloWorld);



//run app
app.listen(3000);

console.log('server running on port 3000')
