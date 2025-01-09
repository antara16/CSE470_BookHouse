const mongoose = require('mongoose');

// Book Schema
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String },
    isAvailable: { type: Boolean, default: true },
    publishedDate: { type: Date },
    rentedBy: { type: String, default: null },  // User renting the book
    dueDate: { type: Date, default: null } // Due date for return
});

// Create the model and export it
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
