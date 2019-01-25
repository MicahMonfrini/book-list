// CONSTRUCTORS

// book

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI
function UI() {}

// EVENT LISTENERS
document.getElementById('book-form').addEventListener('submit', (e) => {
  console.log('test');

  e.preventDefault();
})