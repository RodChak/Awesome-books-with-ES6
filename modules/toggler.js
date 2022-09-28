const toggle = () => {
  const list = document.getElementById('list');
  list.onclick = () => {
    const bookContainer = document.getElementById('books-container');
    bookContainer.style.display = 'block';
    const bookForm = document.getElementById('bookForm');
    bookForm.style.display = 'none';
    const contactInfo = document.getElementById('contact');
    contactInfo.style.display = 'none';
    const pageTitle = document.getElementById('page-title');
    pageTitle.textContent = 'all awesome books';
    const cover = document.getElementById('cover');
    cover.style.display = 'none';
  };

  const display = document.getElementById('add-new');
  display.onclick = () => {
    const bookContainer = document.getElementById('books-container');
    bookContainer.style.display = 'none';
    const bookForm = document.getElementById('bookForm');
    bookForm.style.display = 'block';
    const contactInfo = document.getElementById('contact');
    contactInfo.style.display = 'none';
    const pageTitle = document.getElementById('page-title');
    pageTitle.textContent = 'Add a new book';
    const cover = document.getElementById('cover');
    cover.style.display = 'none';
  };

  const cont = document.getElementById('cont');
  cont.onclick = () => {
    const bookContainer = document.getElementById('books-container');
    bookContainer.style.display = 'none';
    const bookForm = document.getElementById('bookForm');
    bookForm.style.display = 'none';
    const contactInfo = document.getElementById('contact');
    contactInfo.style.display = 'block';
    const pageTitle = document.getElementById('page-title');
    pageTitle.textContent = 'Contact Information';
    const cover = document.getElementById('cover');
    cover.style.display = 'none';
  };
};

export default toggle;