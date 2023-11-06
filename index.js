//позволяет разбирать тела запросов, хранящиеся в req.body, выступая в роли ПО промежуточного слоя для серверов, основанных на Express
const express = require('express');
const bodyParser = require('body-parser');

const db = require('./queries');

//app и port переменные
const app = express();
const port = 3000;

app.use (bodyParser.json());
app.use (bodyParser.urlencoded({
    extended: true,
})
);

//указываем маршрут для поиска GET запроса по корневому / URL-адресу и вернем некоторый JSON:
app.get('/',(request, response)=>{
    response.json({Info:'WEBAPI c использованием Node.js, Express, PostgreSQL'});
});

//Настройте приложения на прослушивание через указанный порт:
app.listen(port,()=>{
    console.log(`Приложение запущено на порту - ${port}`);
});

//Каждой конечной точки мы установим метод HTTP-запроса, URL-путь конечной точки и соответствующую функцию:
app.get('/genre', db.getAllGenres);
app.post('/genre', db.addGenre);
app.delete('/genre/:id', db.deleteGenre);
app.get('/book', db.getAllBooks);
app.post('/book', db.addBook);
app.delete('/book/:id', db.deleteBook);
app.put('/book/:id', db.updateBook);
