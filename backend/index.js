const express = require('express')
var bodyParser = require('body-parser');
const app = express()
const port = 4000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'ReactLogin'
})

connection.connect()


app.get('/login', (request, response) => {
    let username = request.query.email;
    let password = request.query.password;
    console.log(username);
    if (username && password) {
        connection.query('SELECT * FROM login WHERE email = ? AND password = ?', [username, password], function (error, results, fields) {
            if (results.length > 0) {
                response.send('Sucessfull');
            } else {
                response.send('Incorrect');
            }
            response.end();
        });
    } else {
        response.send('Not valid');
        response.end();
    }
});


app.get('/', (req, res) => {
    res.send('welcome');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})