const { request, response } = require('express');

const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'nast',
    host: 'localhost',
    database: 'books',
    password: '',
    port: 5432
});

// Необработанный Sql запрос для получения всех жанров из таблицы жанры
const getAllGenres = (request, response) =>{
    
    pool.query('SELECT * FROM genre', (error,results) =>{
        if(error){
            console.log(error);
            throw error;
        }
        response.status(200).json(results.rows);
        console.log("Жанры получены");
    })
}

//Необработанный Sql запрос для добавления нового жанра 
const addGenre = (request, response) =>{
    const {namegenre, descriptiongenre} = request.body;
    pool.query('INSERT INTO genre (namegenre, descriptiongenre) VALUES ($1, $2) RETURNING *',[namegenre,descriptiongenre], (error,results)=>{
        if(error){
            console.log(error);
            throw error
        }
        response.status(201).send(`Genre aded with ID: ${results.rows[0].id_genre}`)
        console.log("Жанр добавлен");
    })
}

//Необработанный Sql запрос для удаления жанра 
const deleteGenre = (request, response) =>{
    const id = parseInt(request.params.id);
    console.log(`Пытаемся удалить жанр с ${id}`);
    pool.query('DELETE FROM genre WHERE id_genre = $1',[id], (error, results) =>{
        if(error){
            console.log(error);
            throw error
        }
        response.status(200).send(`Genre deleted with ID: ${id}`)
        console.log("Жанры удален");
    });
};

//Необработанный Sql запрос для просмотра всех книг
const getAllBooks = (request, response) => {
    pool.query('SELECT * FROM book', (error, results) => {
        if (error) {
            console.log(error);
            throw error;
        }
        response.status(200).json(results.rows);
        console.log("Книги получены");
    });
};

//Необработанный Sql запрос для добаления новой книги
const addBook = (request, response) => {
    const {namebook, authorbook, id_genre} = request.body;
    pool.query('INSERT INTO book (namebook, authorbook, id_genre) VALUES ($1, $2, $3) RETURNING *', [namebook, authorbook, id_genre], (error, results) => {
        if (error) {
            console.log(error);
            throw error
        }
        response.status(201).send(`Genre aded with ID: ${results.rows[0].isbn}`)
        console.log(`Книга добавлена ${results.rows[0].id_genre}`);
    });
};

//Необработанный Sql запрос для удаления книги
const deleteBook= (request, response) => {
    const id = parseInt(request.params.id);
    pool.query('DELETE FROM book WHERE isbn = $1', [id], (error, results) => {
        if (error) {
            console.log(error);
            throw error
        }
        response.status(200).send(`Book deleted with ID: ${id}`)
        console.log(`Книга с Id ${id} удалена`);
    });
};

//Необработанный Sql запрос для обновления данных о книги
const updateBook = (request, response)=>{
    const id = parseInt(request.params.id);
    const {namebook, authorbook, id_genre} = request.body;
    pool.query('UPDATE book SET namebook = $1, authorbook = $2, id_genre = $3 WHERE isbn = $4',
        [namebook, authorbook, id_genre, id],(error, results) => {
            if(error){
                console.log(error);
                throw error
            }
            response.status(200).send(`Book modified with ID: ${id}`)
            console.log(`Информация о книге с id ${id} обновлена`);
        });
};

module.exports={
    getAllGenres,
    addGenre,
    deleteGenre,
    getAllBooks,
    addBook,
    deleteBook,
    updateBook,
}
