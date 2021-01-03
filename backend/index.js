const express = require('express')
var bodyParser = require('body-parser');
const app = express()
const port = 4000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


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
                response.json({ 'msg': 'Sucessfull' });
            } else {
                response.json({ 'msg': 'Incorrect' });
            }
            response.end();
        });
    } else {
        response.json({ 'msg': 'Not valid' });
        response.end();
    }
});

app.get('/signup', (request, response) => {
    let username = request.query.email;
    let password = request.query.password;
    let name = request.query.name;
    let age = request.query.age;
    let address = request.query.address;

    if (username && password) {
        connection.query('insert into login values(?,?,?,?,?)', [username, password, name, age, address], function (error, results, fields) {
            if (error) {
                response.json({ 'msg': 'Incorrect' });

            }
            else {
                response.json({ 'msg': 'Sucessfull' });
            }
            response.end();
        });
    } else {
        response.json({ 'msg': 'Not valid' });
        response.end();
    }
});


app.get('/', (req, res) => {
    res.send('welcome');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})