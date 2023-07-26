const express = require('express');
const spriteRouter = express.Router();

spriteRouter.route('/')
/*.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})*/
.get((req, res) => {
    res.end('Will send all the sprites to you');
})
.post((req, res) => {
    res.end(`Will add the sprite: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /sprites');
})
.delete((req, res) => {
    res.end('Deleting all sprites');
});


spriteRouter.route('/:spriteId')
/*.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})*/
.get((req, res) => {
    res.end(`Will send details of the sprite: ${req.params.spriteId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /sprites/${req.params.spriteId}`);
})
.put((req, res) => {
    res.write(`Updating the sprite: ${req.params.spriteId}\n`);
    res.end(`Will update the sprite: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting sprite: ${req.params.spriteId}`);
})


module.exports = spriteRouter;