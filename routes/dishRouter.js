const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

// Endpoint
dishRouter.route('/')
.all((req, res, next) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	// next will cause the changed state to pass downwards to other
	// requests get and post
	next();
})
.get((req, res, next) => {
	res.end('Will send all the dishes to you!');
})
// Sending it to client
.post((req, res, next) => {
	res.end('Will add the dish' + req.body.name + 'with details' + 
		req.body.description);
})
.put((req, res, next) => {
	res.statusCode = 403;
	res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
	res.end('Will delete all the dishes!');
});

module.exports = dishRouter;