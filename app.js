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
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;
  console.log(title, author, isbn)
  
  e.preventDefault();
})