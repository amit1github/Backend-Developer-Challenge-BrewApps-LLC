const Book = require("../models/book");

// @method GET
// @route /api/v1/book
// @desc Retrieve all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      success: true,
      message: "Books retrieved successfully",
      data: books,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error retrieving books",
      error: error.message,
    });
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
    res.status(201).json({
      success: true,
      message: "Book added successfully",
      data: savedBook,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error adding a book",
      error: error.message,
    });
  }
};

// @method GET
// @route /api/v1/book/:id
// @desc Retrieve a Single Book with ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      res.status(404).json({ success: false, message: "Book not found" });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Book retrieved successfully",
      data: book,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error retrieving the book",
      error: error.message,
    });
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
      res.status(404).json({ success: false, message: "Book not found" });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error updating the book",
      error: error.message,
    });
  }
};

// @method DELETE
// @route /api/v1/book/:id
// @desc Delete Book with ID.
exports.DeleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);

    if (!deletedBook) {
      res.status(404).json({ success: false, message: "Book not found" });
      return;
    }

    res
      .status(204)
      .json({ success: true, message: "Book deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        success: false,
        message: "Error deleting the book",
        error: error.message,
      });
  }
};
