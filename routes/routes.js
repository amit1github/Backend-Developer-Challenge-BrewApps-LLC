const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  addNewBook,
  getBookById,
  UpdateBookDetails,
  DeleteBook,
} = require("../controllers/book");

// @route Retrieve all books
router.get("/", getAllBooks);

// @route Add new Book
router.post("/", addNewBook);

// @route Retrieve a Single Book with ID
router.get("/:id", getBookById);

// @route Update a Book details with ID
router.put("/:id", UpdateBookDetails);

// @route Delete Book with ID
router.delete("/:id", DeleteBook);

module.exports = router;
