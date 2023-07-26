const express = require('express');
const modelRouter = express.Router();

modelRouter.route('/')
/*.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})*/
.get((req, res) => {
    res.end('Will send all the models to you');
})
.post((req, res) => {
    res.end(`Will add the model: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /models');
})
.delete((req, res) => {
    res.end('Deleting all models');
});


modelRouter.route('/:modelId')
/*.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})*/
.get((req, res) => {
    res.end(`Will send details of the model: ${req.params.modelId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /models/${req.params.modelId}`);
})
.put((req, res) => {
    res.write(`Updating the model: ${req.params.modelId}\n`);
    res.end(`Will update the model: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting model: ${req.params.modelId}`);
})


module.exports = modelRouter;