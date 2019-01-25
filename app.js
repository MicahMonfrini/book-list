// CONSTRUCTORS

// book

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI
function UI() {}

// add book to list prototype
UI.prototype.addBookToList = function(book) {
  // book list variable
  const list = document.getElementById('book-list');
  // create tr element
  const row = document.createElement('tr');
  // insert table cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>
  `

  // append to list
  list.appendChild(row);
}

// clear prototype
UI.prototype.clearFields = () => {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// EVENT LISTENERS
document.getElementById('book-form').addEventListener('submit', (e) => {
  // form values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  // instantiate book object
  const book = new Book(title, author, isbn);

  // instantiate ui object
  const ui = new UI()

  // add book to list

  ui.addBookToList(book);

  // clear fields
  ui.clearFields();

  e.preventDefault();
})