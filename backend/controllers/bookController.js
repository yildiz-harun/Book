const bookModel = require("../models/bookModel");

const getBooks = async (req, res) => {
  const books = await bookModel.find();
  res.status(200).json(books);
};

const createBook = async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error("Please add a name field");
  }
  const newBook = await bookModel.create({
    title: req.body.title,
    author: req.body.author,
    summary: req.body.summary,
  });
  res.status(200).json(req.body);
};

const updateBook = async (req, res) => {
  const book = await bookModel.findById(req.params.id);

  if (!book) {
    res.status(400);
    throw new Error("Book not found");
  }

  const updatedBook = await bookModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json({ message: "Update book: " + req.params.id });
};

const deleteBook = async (req, res) => {
  const book = await bookModel.findById(req.params.id);

  if (!book) {
    res.status(400);
    throw new Error("Book not found");
  }

  await book.remove();

  res.status(200).json({ id: req.params.id });
};

module.exports = { getBooks, createBook, updateBook, deleteBook };
