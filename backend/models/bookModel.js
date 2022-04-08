var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    summary: { type: String, required: true },
  },
  { timestamps: true }
);

//Export model
module.exports = mongoose.model("Book", bookSchema);
