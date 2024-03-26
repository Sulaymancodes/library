const mainContainer = document.querySelector('main');
const addingBookForm = document.querySelector('#Add-a-book');
const closeForm = document.querySelector('.close-btn');
const submitButton = document.querySelector('#submit-btn');

const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const bookReadStatus = document.querySelector('input[name="options"]:checked');

const myLibrary = [
    {
        title: "Lord of The Rings",
        author: "John Ronald",
        pages: 242,
        readStatus: false,
    },
    {
        title: "Harry Potter",
        author: "J.K Rowling",
        pages: 164,
        readStatus: true,
    }
]

//using for loop to render two books into the DOM
function renderBooks(){
    for(let i = 0; i < myLibrary.length; i++){
        const bookIcon = document.createElement('img');
        bookIcon.classList.add('book-icon');
        bookIcon.src = 'svg/book-svgrepo-com.svg';
        bookIcon.alt = 'bookicon';
    
        const bookContainer = document.createElement('div');
        bookContainer.classList.add('book');
    
        const titleText = document.createElement('h2');
        titleText.innerText = myLibrary[i].title;
        
        const authorText = document.createElement('p');
        authorText.innerText = myLibrary[i].author;
        
        const pagesText = document.createElement('p');
        pagesText.innerText = `Pages: ${myLibrary[i].pages}`;
        
        const readStatusText = document.createElement('button');
        if(myLibrary[i].readStatus === true){
            readStatusText.classList.add('read');
            readStatusText.innerText = 'Read';
        }else{
            readStatusText.classList.add('not-read');
            readStatusText.innerText = "Not Read";
        }
        
        
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = "Delete";
        deleteBtn.classList.add('delete-btn');

        bookContainer.append(bookIcon, titleText, authorText, pagesText, readStatusText,deleteBtn);
        mainContainer.appendChild(bookContainer);
    }
}


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

//Creating add button
const addIconContainer = document.createElement('div');
addIconContainer.classList.add('main-item');

const addIcon = document.createElement('img');
addIcon.classList.add('icon');
addIcon.src = 'svg/add-svgrepo-com.svg';
addIcon.alt = 'addicon';

addIconContainer.appendChild(addIcon);
mainContainer.appendChild(addIconContainer);

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
    
    const bookFormTitle = bookTitle.value;
    const bookFormAuthor = bookAuthor.value;
    const bookFormPages = bookPages.value;
    // Loop through the radio buttons to find the checked one
    let selectedStatus;
    const statusOptions = document.getElementsByName('bookReadStatus');
    for (const option of statusOptions) {
        if (option.checked) {
            selectedStatus = option.value;
            break; // Exit the loop once a checked radio button is found
        }
    }

    const newBookForm = new Book(bookFormTitle, bookFormAuthor, bookFormPages, selectedStatus);
    myLibrary.push(newBookForm);
});




renderBooks()

