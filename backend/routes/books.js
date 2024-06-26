const express = require('express');
const router = express.Router();
const { Books} = require('../db'); // Importing the Books model
const { Author } = require('../authormodel');
const {authmiddleware}=require('../middleware')

router.post('/',authmiddleware, async function(req, res) {
   
    const data = {
        // Your existing data properties
        bookTitle: req.body.bookTitle,
        authorName: req.body.authorName,
        imageURL: req.body.imageURL,
        category: req.body.category,
        description: req.body.description,
        bookpdfURL: req.body.bookpdfURL,

        userId: req.userId,

      };
   


    try {
        // Create a new document using the Books model
        const result = await Books.create(data);
        res.send(result);
      
    } catch (err) {
        console.error('Error occurred:', err);
        res.status(500).send({ error: 'An error occurred while inserting data into the database.' });
    }
});


// GET endpoint to retrieve details of all books
router.get('/', async function(req, res) {
    try {
        // Query all documents from the Books collection
        const books = await Books.find({});
        res.json(books);
    } catch (err) {
        console.error('Error occurred:', err);
        res.status(500).json({ error: 'An error occurred while retrieving data from the database.' });
    }
});
router.get('/admin',authmiddleware, async function(req, res) {
    try {
       
        // Query all documents from the Books collection
        const books = await Books.find({ userId: req.userId });
        // books.forEach(book => {
        //     console.log(book.userId); // This will log the userId associated with each book
        // });
        res.send(books);
    } catch (err) {
        console.error('Error occurred:', err);
        res.status(500).json({ error: 'An error occurred while retrieving data from the database.' });
    }
});

// GET endpoint to retrieve details of a specific book by its ID
router.get('/:id', async function(req, res) {
    const bookId = req.params.id;
    try {
        // Query a specific document from the Books collection by its ID
        const book = await Books.findById(bookId);
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(book);
    } catch (err) {
        console.error('Error occurred:', err);
        res.status(500).json({ error: 'An error occurred while retrieving data from the database.' });
    }
});

// Update details of a specific book by its ID
router.put('/:id', async function(req, res) {
    const bookId = req.params.id;
    const updatedData = req.body;
    try {
        // Find the book by its ID and update its details
        const updatedBook = await Books.findByIdAndUpdate(bookId, updatedData, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(updatedBook);
    } catch (err) {
        console.error('Error occurred:', err);
        res.status(500).json({ error: 'An error occurred while updating data in the database.' });
    }
});

// Delete a specific book by its ID

// http://localhost:3000/api/books/65ec710ebe1f8ed4c12b90c3
router.delete('/:id', async function(req, res) {
    const bookId = req.params.id;
    try {
        // Find the book by its ID and delete it
        const deletedBook = await Books.findByIdAndDelete(bookId);
        if (!deletedBook) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(deletedBook);
    } catch (err) {
        console.error('Error occurred:', err);
        res.status(500).json({ error: 'An error occurred while deleting data from the database.' });
    }
});



// http://localhost:3000/api/books?category='fiction'
router.get('/', async function(req, res) {
    const category = req.query.category; // Get the category from the query parameter
    try {
        let books;
        if (category) {
            // If category is provided, filter books by that category
            books = await Books.find({ category: category });
        } else {
            // If no category is provided, retrieve details of all books
            books = await Books.find({});
        }
        res.json(books);
    } catch (err) {
        console.error('Error occurred:', err);
        res.status(500).json({ error: 'An error occurred while retrieving data from the database.' });
    }
});


router.get('/get/count', async (req, res) => {
    const bookcnt=await Books.countDocuments()

    if(!bookcnt)
    {
         res.status(500).json({success:false});
    }

    res.send({
        bookcount:bookcnt
    });
});

router.get('/get/category', async (req, res) => {
    try {
        const categoryCounts = await Books.aggregate([
            {
                $group: {
                    _id: '$category',
                    count: { $sum: 1 }
                }
            }
        ]);

        let totalCategories = 0;
        if (categoryCounts && categoryCounts.length > 0) {
            totalCategories = categoryCounts.length;
        }

        res.send({
            totalCategories: totalCategories,
            // categoryCounts: categoryCounts
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false });
    }
});





// router.get('/count/category',async(req,res)=>{
//     const Bookscnt=await Books.countDocuments()

//     if(!Bookscnt)
//     {
//          res.status(500).json({success:false});
//     }

//     res.send({
//         Books:Bookscnt
//     });
// })

const moment = require('moment'); // Import moment.js for date manipulation

router.get('/get/countLast24hrs', async (req, res) => {
    try {
        // Calculate the date 24 hours ago
        const twentyFourHoursAgo = moment().subtract(24, 'hours').toDate();

        // Aggregate to count books posted in the last 24 hours
        const booksCountLast24hrs = await Books.aggregate([
            {
                $match: {
                    createdAt: { $gte: twentyFourHoursAgo }
                }
            },
            {
                $group: {
                    _id: null,
                    count: { $sum: 1 }
                }
            }
        ]);

        // Extract the count from the aggregation result
        let totalCountLast24hrs = 0;
        if (booksCountLast24hrs && booksCountLast24hrs.length > 0) {
            totalCountLast24hrs = booksCountLast24hrs[0].count;
        }

        res.send({
            totalCountLast24hrs: totalCountLast24hrs
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false });
    }
});


router.get('/get/authorCount', async (req, res) => {
    try {
        const authorCount = await Books.aggregate([
            {
                $group: {
                    _id: '$authorName'
                }
            },
            {
                $group: {
                    _id: null,
                    authorCount: { $sum: 1 }
                }
            }
        ]);

        let totalAuthors = 0;
        if (authorCount && authorCount.length > 0) {
            totalAuthors = authorCount[0].authorCount;
        }

        res.send({
            totalAuthors: totalAuthors
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false });
    }
});







module.exports = router;
