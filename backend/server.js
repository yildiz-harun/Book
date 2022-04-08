const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

app.use("/api/books", bookRoutes);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server started listening on port: ${process.env.PORT}`);
});
