import Book from './modules/object constructor.js';
import toggle from './modules/toggler.js';
import { UI, Store } from './modules/User Interface.js';
import displayDate from './modules/date.js';

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#bookForm').addEventListener('submit', (e) => {
// Prevent actual submit
  e.preventDefault();
  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  // instatiate book
  const book = new Book(title, author);
  // Add book to UI
  UI.addBookToList(book);
  // Add book to store
  Store.addBook(book);
  // Clear fields
  UI.clearFields();
});

// Event: Remove a Book
document.querySelector('.books-container').addEventListener('click', (e) => {
  // Removebook from UI
  UI.deleteBook(e.target);
  // Removebook from Store
  Store.removeBook(e.target.parentElement.children[0].textContent.replace(/\s+/g, ''));
});

toggle();
setInterval(displayDate, 1000);
