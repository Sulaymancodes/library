const mainContainer = document.querySelector('main');
const addingBookForm = document.querySelector('#Addbook');
const closeForm = document.querySelector('.close-btn');
const submitButton = document.querySelector('#submit-btn');

const bookTitleForm = document.querySelector('#title');
const bookAuthorForm = document.querySelector('#author');
const bookPagesForm = document.querySelector('#pages');
const bookReadStatusForm = document.querySelector('input[name="options"]:checked');

const myLibrary = [
    {
        title: "Lord of The Rings",
        author: "John Ronald",
        pages: 242,
        readStatus: "false",
    },
    {
        title: "Harry Potter",
        author: "J.K Rowling",
        pages: 164,
        readStatus: "true",
    }
]



//using for loop to render books into the DOM
function renderBooks(){
    // Clear existing content
    mainContainer.innerHTML = '';
    mainContainer.appendChild(addIconContainer);

    // Loop through the library and render each book
    myLibrary.forEach((book, index) => {
        const bookContainer = document.createElement('div');
        bookContainer.classList.add('book');

        // Add data attribute to store the index of the book
        bookContainer.dataset.index = index;

        const bookIcon = document.createElement('img');
        bookIcon.classList.add('book-icon');
        bookIcon.src = 'svg/book-svgrepo-com.svg';
        bookIcon.alt = 'bookicon';
    
        const titleText = document.createElement('h2');
        titleText.innerText = book.title;
        
        const authorText = document.createElement('p');
        authorText.innerText = book.author;
        
        const pagesText = document.createElement('p');
        pagesText.innerText = `Pages: ${book.pages}`;
        
        const readStatusText = document.createElement('button');
        if (book.readStatus === "true") {
            readStatusText.classList.add('book-read');
            readStatusText.innerText = 'Read';
        } else{
            readStatusText.classList.add('not-read');
            readStatusText.innerText = 'Not Read';
        }
        
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = "Delete";
        deleteBtn.classList.add('delete-btn');

       
        
        //removing book from the DOM
        deleteBtn.addEventListener('click', deleteBook)

        bookContainer.append(bookIcon, titleText, authorText, pagesText, readStatusText, deleteBtn);
        mainContainer.appendChild(bookContainer);

        readStatusText.addEventListener('click',() =>{
            if(readStatusText.innerText === "Read"){
                readStatusText.innerHTML = "Not Read";
                readStatusText.classList.remove('book-read')
                readStatusText.classList.add('not-read');
            }
            else if(readStatusText.innerText === "Not Read"){
                readStatusText.innerHTML = "Read";
                readStatusText.classList.remove('not-read');
                readStatusText.classList.add('book-read');
            }
        });
    });
    
}

function deleteBook(event){
    const bookContainer = event.target.closest('.book');
    const index = Number(bookContainer.dataset.index);
    myLibrary.splice(index, 1);
    renderBooks()
}
//Creating add button
const addIconContainer = document.createElement('div');
addIconContainer.classList.add('main-item');

const addIcon = document.createElement('img');
addIcon.classList.add('icon');
addIcon.src = 'svg/add-svgrepo-com.svg';
addIcon.alt = 'addicon';

addIconContainer.appendChild(addIcon);
mainContainer.appendChild(addIconContainer);

function Book(title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBook(){
    const newBook = new Book(title,author,pages,readStatus);
    myLibrary.push(newBook);
}



//show pop up form to add book
addIconContainer.addEventListener('click', () =>{
    addingBookForm.showModal();
})

//close pop up form to add book
closeForm.addEventListener('click', () =>{
    addingBookForm.close();
})


submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    const bookFormTitle = bookTitleForm.value;
    const bookFormAuthor = bookAuthorForm.value;
    const bookFormPages = bookPagesForm.value;

    // Loop through the radio buttons to read and not read
    let selectedStatus;
    const statusOptions = document.getElementsByName('choice');
    for (const option of statusOptions) {
        if (option.checked) {
            selectedStatus = option.value;
            break; // Exit the loop once a checked radio button is found
        }
    }

    const newBookForm = new Book(bookFormTitle, bookFormAuthor, bookFormPages, selectedStatus);
    myLibrary.push(newBookForm);
    renderBooks()
});




renderBooks()

