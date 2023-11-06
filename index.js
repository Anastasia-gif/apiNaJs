const express = require('express');
const bodyParser = require('body-parser');
const db = require('./queries');

const app = express();
const port = 3000;

app.use (bodyParser.json());
app.use (bodyParser.urlencoded({
    extended: true,
})
);

app.get('/',(request, response)=>{
    response.json({Info:'WEBAPI c использованием Node.js, Express, PostgreSQL'});
});

app.listen(port,()=>{
    console.log(`Приложение запущено на порту - ${port}`);
});

app.get('/genre', db.getAllGenres);
app.post('/genre', db.addGenre);
app.delete('/genre/:id', db.deleteGenre);
app.get('/book', db.getAllBooks);
app.post('/book', db.addBook);
app.delete('/book/:id', db.deleteBook);
app.put('/book/:id', db.updateBook);