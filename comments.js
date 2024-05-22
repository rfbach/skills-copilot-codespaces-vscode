// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create connection to the database
const MongoClient = require('mongodb').MongoClient;
let db;

// Connect to the database
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    db = client.db('commentdb');
});

// Display comments from database
app.get('/', (req, res) => {
    db.collection('comments').find().toArray((err, result) => {
        let output = '<h1>Comments</h1>';
        output += '<ul>';
        for (let i = 0; i < result.length; i++) {
            output += '<li>' + result[i].name + ' : ' + result[i].comment + '</li>';
        }
        output += '</ul>';
        res.send(output);
    });
});

// Start server
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});

// Path: comments.html
<!DOCTYPE html>
<html>
<head>
    <title>Comments</title>
</head>
<body>
    <h1>Comments</h1>
    <form action="http://localhost:3000/comment" method="post">
        Name: <input type="text" name="name"><br>
        Comment: <textarea name="comment"></textarea><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>

// Path: comments.js
// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create connection to the database
const MongoClient = require('mongodb').MongoClient;
let db;

// Connect to the database
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    db = client.db('commentdb');
});

// Display comments from database
app.get('/', (req, res) => {
    db.collection('comments').find().toArray((err, result) => {
        let output = '<h1>Comments</h1>';
        output += '<ul>';
        for (let i = 0; i < result.length; i++) {
            output += '<li>' + result[i].name + ' : ' + result[i].comment + '</li>';
        }
        output += '</ul>';
        res.send(output);