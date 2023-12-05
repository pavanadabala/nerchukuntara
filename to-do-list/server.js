const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const port = 3000;

app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'iamp2skA$',
    database: 'todo-list'
});

db.connect((err) => {
    if (err) {
        console.log('Error connecting to MYSQL:', err);
    } else {
        console.log('Connected to the Database');
    }
});

app.use(bodyParser.json());

app.post('/add-todo', (req, res) => {
    console.log(req.body);
    const { title, description } = req.body;

    if (!title) {
        return res.status(400).json({ sucess: false, message: 'Title is required.' })
    }

    const completed = false;

    const sql = 'INSERT INTO todos (title, description, completed) VALUES (?, ?, ?)';
    db.query(sql, [title, description, completed], (err, result) => {
        if (err) {
            console.error('Error adding todo:', err);
            return res.status(500).json({ sucess: false, message: 'Failed to add todo.' });
        }

        return res.status(200).json({ sucess: true, message: 'Todo added sucessfully.' });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})