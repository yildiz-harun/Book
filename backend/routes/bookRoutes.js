const express = require("express");
const router = express.Router();
const {
  getBooks,
  createBook,
  deleteBook,
  updateBook,
} = require("../controllers/bookController");

//middleware that is specific to this router
// router.use((req, res, next) => {
//   next();
// });

router.route("/").get(getBooks).post(createBook);
router.route("/:id").put(updateBook).delete(deleteBook);

// // define the home page route
// router.get("/", getBooks);

// // define the home page route
// router.post("/", createBook);

// // define the home page route
// router.put("/:id", updateBook)

// // define the home page route
// router.delete("/:id", deleteBook);
// );

module.exports = router;
