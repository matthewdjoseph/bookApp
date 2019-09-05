// video 5

var books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){
    book.textContent += ' (book title)';
})

const bookList = document.querySelector('#book-list');

bookList.innerHTML += '<p>This is how you add HTML</p>';