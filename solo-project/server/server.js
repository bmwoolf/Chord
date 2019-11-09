const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const router = require('./routers/router')
const bodyParser = require('body-parser')
const controller = require('./controllers/controller');

//we use res.locals because of this- we will add/ remove stuff from it in the middleware, then 
//we will send it out/reference it from here- res.json(res.locals.movies)
//get a request, formulate a response, send it back- test with postman
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/placeholder', express.static(path.join(__dirname, '../index2.js')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.post('/signup', controller.addUser, (req, res) => {
    //upon success, redirect to line 23- serve next file of classes
    console.log('here')
    res.sendStatus(200);
})

app.get('/homepage', (req, res) => {
    res.sendFile(path.join(__dirname, '../classes.html'))
})

//app.get('/login/:id', () => {}) -- the /:id means that the route will go to the specific thing specified, it turns it into a variable- any string that comes in is stored in id
//in the controller, we will access this in the function as const { id } = req.params;
//queries are question marks, params is the colon

app.use('/build', express.static(path.resolve(__dirname, '../build')))

//handle requests for static files?- files that clients download as they are from the server
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });

// app.use('*', (res, req) => {
//     res.sendStatus(404);
// })

app.use((err, req, res, next) => {
    console.log('Err')
    console.log(err)
    // res.status(500)
})

module.exports = app;