const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


//bring in route
const postRoutes = require('../deliverable2/routes/post');


// middleware
app.use(morgan('dev'));
app.use((rep,res,next)=> {
	//Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
})
app.use(bodyParser.json());
app.use("/", postRoutes);
// Add headers
const port = 8080;
app.listen(port, () => {
	console.log('A Node Js API is listening on port: ', port);
});