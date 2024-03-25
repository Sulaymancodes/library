const mainContainer = document.querySelector('main')

function Book(){

}
function addBook(){
    const title = prompt("Enter The Book Title:");
    const author = prompt("Enter The Book Author:");
    const pages = prompt("Enter The Book Pages:");
    const readStatus = prompt("Enter The Book Read Status:");

    const newBook = {
        title: title,
        author: author,
        pages: pages,
        readStatus: readStatus,
    }
    myLibrary.push(newBook);
}

//addBook()
const addIconContainer = document.createElement('div');
addIconContainer.classList.add('main-item');

const addIcon = document.createElement('img');
addIcon.classList.add('icon');
addIcon.src = 'svg/add-svgrepo-com.svg';
addIcon.alt = 'addicon';

addIconContainer.appendChild(addIcon);
mainContainer.appendChild(addIconContainer);


const myLibrary = [
    {
        title: "Spiderman Comics",
        author: "Stan Lee",
        pages: 32,
        readStatus: "Not Read",
    },
    {
        title: "Lord of The Rings",
        author: "John Ronald",
        pages: 242,
        readStatus: "Read",
    },
    {
        title: "Harry Potter",
        author: "J.K Rowling",
        pages: 164,
        readStatus: "Read",
    }
]

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
    readStatusText.innerText = myLibrary[i].readStatus;

    bookContainer.append(bookIcon, titleText, authorText, pagesText, readStatusText);
    mainContainer.appendChild(bookContainer);
}

