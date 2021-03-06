const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

const bookSchema = new Schema({
  title: String,
  description: String,
  author: [ { type : ObjectId, ref: 'Author' } ],
  rating: Number
}, {
  timestamps: {
    createdAt: "createdAt",
    updatedAt: "updatedAt"
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;