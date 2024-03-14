const express = require('express');
const router = express.Router();

const { Author } = require('../authormodel');

router.post('/', async function(req, res) {
    const data = req.body;

    try {
        // Create a new document using the Books model
        const result = await Author.create(data);
        res.send(result);
    } catch (err) {
        console.error('Error occurred:', err);
        res.status(500).send({ error: 'An error occurred while inserting data into the database.' });
    }
});

router.get('/', async function(req, res) {
    try {
        // Retrieve all documents from the Author collection
        const authors = await Author.find();
        res.send(authors);
    } catch (err) {
        console.error('Error occurred:', err);
        res.status(500).send({ error: 'An error occurred while retrieving data from the database.' });
    }
});




module.exports = router;
