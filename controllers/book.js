const Book = require("../models/book");

// @method GET
// @route /api/v1/book
// @desc Retrieve all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving books" });
  }
};

// @method POST
// @route /api/v1/book
// @desc Add new Book.
exports.addNewBook = async (req, res) => {
  try {
    const { title, author, summary } = req.body;

    const newBook = new Book({
      title,
      author,
      summary,
    });

    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error adding a book" });
  }
};

// @method GET
// @route /api/v1/book/:id
// @desc Retrieve a Single Book with ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      res.status(404).json({ error: "Book not found" });
      return;
    }

    res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving the book" });
  }
};

// @method PUT
// @route /api/v1/book/:id
// @desc Update a Book details with ID
exports.UpdateBookDetails = async (req, res) => {
  try {
    const { title, author, summary } = req.body;

    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, summary },
      { new: true }
    );

    if (!updatedBook) {
      res.status(404).json({ error: "Book not found" });
      return;
    }

    res.status(200).json(updatedBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating the book" });
  }
};

// @method DELETE
// @route /api/v1/book/:id
// @desc Delete Book with ID.
exports.DeleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);

    if (!deletedBook) {
      res.status(404).json({ error: "Book not found" });
      return;
    }

    res.status(204).send(); // 204 No Content for successful deletion
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting the book" });
  }
};
