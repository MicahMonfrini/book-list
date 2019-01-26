// CLASSES

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
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

  deleteBook(target) {
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  showAlert(message, className) {
    // create div
    const div = document.createElement('div');
    // add classes
    div.className = `alert ${className}`;
    // add text
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector('.container');
    // get form
    const form = document.querySelector('#book-form');
    // insert alert
    container.insertBefore(div, form);

    // timeout after 3 sec
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000)
  }
  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

class Store {

  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }
  
  static displayBooks() {

  }

  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook() {

  }

}

// EVENT LISTENERS

// add a book

document.getElementById('book-form').addEventListener('submit', (e) => {
  // form values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  // instantiate book object
  const book = new Book(title, author, isbn);

  // instantiate ui object
  const ui = new UI()

  // form validation
  if(title === '' || author === '' || isbn === '') {
    // show error if any fields are blank
    ui.showAlert('Please fill in all fields.', 'error');
  } else {
    // add book to list
    ui.addBookToList(book);
    // add to LS
    Store.addBook(book);
    // show success message
    ui.showAlert('Book added!', 'success')
    // clear fields
    ui.clearFields();
  }

  // clear fields
  ui.clearFields();

  e.preventDefault();
})

// delete a book

document.getElementById('book-list').addEventListener('click', (e) => {
  // instantiate ui object
  const ui = new UI()
  // delete row that is targeted
  ui.deleteBook(e.target);
  // show alert message
  ui.showAlert('Book removed!', 'success')

  e.preventDefault();
})