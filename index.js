import {
  addBook, formAuthor, formTitle, addForm,
} from './modules/addBook.js';

import toggler from './modules/navigation.js';

import X from './modules/date.js';

// bookArray
let bookArray = JSON.parse(localStorage.getItem('bookArray')) || [];
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  // to add a book to bookArray
  addTobookArray() {
    bookArray.push(this);
    localStorage.setItem('bookArray', JSON.stringify(bookArray));
  }

  // to remove a book from bookArray
  removeFrombookArray() {
    bookArray = bookArray.filter((element) => element.title !== this.title);
    localStorage.setItem('bookArray', JSON.stringify(bookArray));
  }
}

addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const titleValue = formTitle.value;
  const authorValue = formAuthor.value;

  // to create an instance/object of the class
  const book = new Book();
  book.title = titleValue;
  book.author = authorValue;

  // to add the created book to bookArray
  book.addTobookArray();
  addBook(book);

  // to clear/reset the input field
  addForm.reset();
});

// to display bookItem from the local storage
for (let i = 0; i < bookArray.length; i += 1) {
  const book = new Book();
  book.title = bookArray[i].title;
  book.author = bookArray[i].author;
  addBook(book);
}
const y = () => {
  document.getElementById('time').innerHTML = X.displayDate();
};

toggler();
setInterval(y, 1000);