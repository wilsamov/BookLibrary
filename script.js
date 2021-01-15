let myLibrary = [
    {
        title: 'Hobbit',
        author: 'Tolkien',
        pages: 295,
        read: true,
    },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(newBook) {
    if (myLibrary.some((book) => book.title === newBook.title)) return false;
    myLibrary.push(newBook);
    return true;
}

function getBookFromInput() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    return new Book(title, author, pages, read);
}

function addBook(e) {
    e.preventDefault();
    if (addBookToLibrary(getBookFromInput())) {
        updateGrid();
    } else {
        alert("This books is already in the library.");
    }
}

function updateGrid() {
    
}