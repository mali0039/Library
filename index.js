let bookOne = new Book("The Lightning Thief", "Rick Riordan", "240 pages");
let myLibrary = [];
var counter = 0;
addBookToLibrary(bookOne);
function Book(title,author,pages, description) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.readBook = "Not Read",
    this.index = counter,
    this.description = description
}

Book.prototype.getTemplate = function () {
    if (counter == 0) {
return `<div class="card col-lg-4" id="card-${counter}" style="width: 18rem;">
<img src="book.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title"> ${this.title} </h5>
  <p class="card-text">A teenager discovers he's the descendant of a Greek god and sets out on an adventure to settle an on-going battle between the gods. When his lightning bolt is stolen, Zeus accuses Poseidon's son Percy Jackson and gives Poseidon's son fourteen days to return it, otherwise he will initiate a war amongst the gods.</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Author: <b> ${this.author} </b> </li>
  <li class="list-group-item">Page Count: <b>${this.pages} </b></li>
  <li class="list-group-item read-status">Read Status: <b>${this.readBook} </b></li>
</ul>
<div class="card-body">
<a class="btn btn-success btn-md read" data-index=${counter} role="button">Read</a>
<a class="btn btn-danger btn-md delete" data-index=${counter} role="button">Delete</a>
</div>
</div>`
    }
    return `<div class="card col-lg-4" id="card-${counter}" style="width: 18rem;">
    <img src="bookcover.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> ${this.title} </h5>
      <p class="card-text"> ${this.description} </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Author: <b> ${this.author} </b> </li>
      <li class="list-group-item">Page Count: <b>${this.pages} </b></li>
      <li class="list-group-item read-status" id="read">Read Status: <b>${this.readBook} </b></li>
    </ul>
    <div class="card-body">
    <a class="read btn btn-success btn-md" data-index=${counter} role="button">Read</a>
    <a class="btn btn-danger btn-md delete" data-index=${counter} role="button">Delete</a>
    </div>
    </div>`
}


function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}
let row = document.querySelector(".row");
function render() {
    for (let i = counter; i < myLibrary.length; i++) {
        row.innerHTML += myLibrary[i].getTemplate();
    }
    counter++;
}
render();

let addBook = document.querySelector("#add-button");
addBook.addEventListener('click', function() {
    console.log("YO!");
    let bookTitle = document.querySelector("#book-title").value;
    let author = document.querySelector("#author").value;
    let numOfPages = document.querySelector("#numOfPages").value;
    let description = document.querySelector("#description").value;
    let book = new Book(bookTitle, author, numOfPages, description);
    addBookToLibrary(book);
    render();
    addListeners();
});

addListeners();

  function addListeners() {
    document.querySelectorAll('.delete').forEach(item => {
        item.addEventListener('click', event => {
          //handle click
          let index = item.dataset.index;
        let book = document.querySelector("#card-"+index);
        row.removeChild(book);
        })
      });
      document.querySelectorAll('.read').forEach(item => {
        item.addEventListener('click', event => {
        let index = item.dataset.index;
        let book = document.querySelector("#card-"+index);
        console.log(book);
        book.querySelector(".read-status").innerHTML = "Read Status: <b> Read </b>";
        })
      });
    }