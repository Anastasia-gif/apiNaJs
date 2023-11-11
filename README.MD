 <h1 style="text-align: center"> Api на Js.</h1>

<h2 style="text-align: center">Описание проекта</h2>

<p> Мы создадим CRUD RESTful APi в среде Node.js, который будет работать на сервере Express и использует базу данных PostgreSQL. Мы также осуществим подключение сервера Express к PosgresSql c помощью узла-Posgres. Наш API сможет обрабатывать методы HTTP-запросов, соответствующие базе данных PostgreSQL, из которой API получает свои данные.Мы разрешим операции CRUD, GET, POST, PUT, DELETE с API, который будет запускать соответствующие команды базы данных. Для этого мы настроим маршрут для каждой конечной точки и функцию для каждого запроса.</p>

<h3>В проекте используется:</h3>
 <ul>
    <li>Visual Studio Code</li>
    <li>Express</li>
    <li>Node.js</li>
    <li>PostgreSql</li>
 </ul>

 <h3>Склонируйте репозиторий <b><i>git clone https://github.com/Anastasia-gif/apiNaJs.git  </i></b><br> Или настройте проект сами</h3>

 <h3>Настройка сервера Express</h3>
 <ol>
    <li>Создайте папку node-api-postgres</li>
    <li>Перейти в папку</li>
    <li>Открыть консоль и создать package.json <b>npm init -y </b></li>
    <li> Установить Express для сервера и node-postgres для подключения к PostgreSQL: <b>npm i express pg</b></li>
 </ol>
 Теперь наши зависимости загружены в node_modules и package.json.<br>

```javaScript
{
 "name": "api-books",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test<br> specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",>
    "pg": "^8.11.3"
  }
}
```
Файл <b><i>index.js</i></b> используется в качестве точки входа для нашего сервера. 

Файл <b><i>queries.js</i></b> конфигурация нашего одключения к PosgreSql.

Мы создадим шесть функций для шести маршрутов, как показано ниже. Сначала создайте все функции для каждого маршрута. Затем экспортируйте функции, чтобы они были доступны:
<ol>
  <li>GET: / | displayHome()</li>

  <li>GET: /users | getUsers()</li>

  <li> GET: /users/:id | getUserById()</li>

  <li> POST: /users | createUser()</li>

  <li> PUT: /users/:id | updateUser()</li>

  <li> DELETE: /users/:id | deleteUser()</li>
</ol>



