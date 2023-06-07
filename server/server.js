const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const db = require('./db/db-connection.js');


const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route "/"
app.get('/', (req, res) => {
    res.json({ message: 'Hola, from My template ExpressJS with React-Vite' });
});

/******************* CODE CHALLENGE TABLE  **************************/
app.get('/api/codechallenge', async (req, res) => {
    try {
        const { rows: code_challenge } = await db.query('SELECT * FROM code_challenge ORDER BY date DESC');
        console.log(code_challenge);
        res.send(code_challenge);
    } catch (e) {
        return res.status(400).json({ e });
    }
});

app.post('/api/codechallenge', async (req, res) => {
    try {

        const { title, link, date } = req.body; 
        if(!date) date = 'NOW()';

        const result = await db.query(
            `INSERT INTO code_challenge(code_id, title, link, date) VALUES(nextval('cc_seq'), $1, $2, $3) RETURNING *`,
            [title, link, date],
        );
        console.log(result.rows[0]);
        res.json(result.rows[0]);

    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });
    }
});

/******************* SOLUTIONS TABLE  **************************/
app.get('/api/solutions/:codeId', async (req, res) => {
    try {
        const id = req.params.codeId;
        const { rows: solutions } = await db.query('SELECT * FROM solutions WHERE code_id = $1', [id]);
        res.send(solutions);
    } catch (e) {
        return res.status(400).json({ e });
    }
});

app.post('/api/solutions', async (req, res) => {
    try {

        const { id, username, link, description, title } = req.body; 

        const result = await db.query(
            `INSERT INTO solutions(solution_id, code_id, username, link, description, title) VALUES(nextval('solutions_seq'), $1, $2, $3, $4, $5) RETURNING *`,
            [id, username, link, description, title],
        );

        console.log(result.rows[0]);
        res.json(result.rows[0]);

    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });
    }
});

/******************* SOLUTION COMMENTS TABLE  **************************/
app.get('/api/solutions/comments/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { rows: solutionComments } = await db.query('SELECT * FROM solution_comments WHERE solution_id = $1', [id]);
        res.send(solutionComments);
    } catch (e) {
        return res.status(400).json({ e });
    }
});

app.post('/api/solutions/comments', async (req, res) => {
    try {

        const { id, content, username } = req.body; 
        const result = await db.query(
            `INSERT INTO solution_comments(sc_id, solution_id, comment, username) VALUES(nextval('sc_seq'), $1, $2, $3) RETURNING *`,
            [id, content, username],
        );
        console.log(result.rows[0]);
        res.json(result.rows[0]);

    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });
    }
});

/******************* MAIN COMMENTS TABLE  **************************/
app.get('/api/code/comments/:codeId', async (req, res) => {
    try {
        const id = req.params.codeId;
        const { rows: mainComments } = await db.query('SELECT * FROM main_comments WHERE code_id = $1', [id]);
        res.send(mainComments);
    } catch (e) {
        return res.status(400).json({ e });
    }
});

app.post('/api/code/comments', async (req, res) => {
    try {

        const { id, content, username } = req.body; 

        const result = await db.query(
            `INSERT INTO main_comments(mc_id, code_id, comment, username) VALUES(nextval('mc_seq'), $1, $2, $3) RETURNING *`,
            [id, content, username],
        );
        console.log(result.rows[0]);
        res.json(result.rows[0]);

    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });
    }
});

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Hola, Server listening on ${PORT}`);
});