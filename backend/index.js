const express = require('express')
const app = express()
const port = 4000

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'ReactLogin'
})

connection.connect()

app.get("/login",function(req,res){
    var query = "SELECT * FROM ??";
    let table = ["login"];
    query = mysql.format(query,table);
    connection.query(query, (err,rows) => {
        if(err) {
            return res.json({"Error" : true, "Message" : "Error executing MySQL query"});
        }
        res.json({"Error" : false, "Message" : "Success", "Users" : rows});
    });
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})