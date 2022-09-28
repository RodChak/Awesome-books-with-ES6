// Ui Class: handle UI TAsks
// eslint-disable-next-line max-classes-per-file
export class UI {
  static displayBooks() {
    // eslint-disable-next-line no-use-before-define
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const bookContainer = document.querySelector('.books-container');
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book-div');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const RmvBttn = document.createElement('button');
    RmvBttn.classList.add('button-class');

    bookTitle.innerHTML = ` ${book.title} `;
    bookAuthor.innerHTML = ` ${book.author}`;
    RmvBttn.innerText = 'Remove';

    bookDiv.append(bookTitle, bookAuthor, RmvBttn);
    bookContainer.appendChild(bookDiv);
  }

  static deleteBook(el) {
    if (el.classList.contains('button-class')) {
      el.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

// Store Class:  handles storage
export class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(title) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.title.replace(/\s+/g, '') === title) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}