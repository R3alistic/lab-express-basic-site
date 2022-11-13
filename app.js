const express = require('express');

const app = express();

//make everything in the folder public
app.use(express.static('public'));
app.get('/home', (request, response) => {
    console.log('The request url', request.url);
    response.sendFile(__dirname + '/views/home.html');
});
app.get('/about', (request, response) => {
    console.log('The request url', request.url);
    response.sendFile(__dirname + '/views/about.html');
});
app.get('/works', (request, response) => {
    console.log('The request url', request.url);
    response.sendFile(__dirname + '/views/works.html');
});
app.listen(3000, () => console.log('Server is running!'));
