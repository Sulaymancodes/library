const titleText = document.querySelector('.title');
const authorText = document.querySelector('.author');
const pagesText = document.querySelector('.pages');
const readStatusText = document.querySelector('.read-status');



const myLibrary = []
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

addBook()

for(let i = 0; i < myLibrary.length; i++){
    titleText.innerText = myLibrary[i].title;
    authorText.innerText = myLibrary[i].author;
    pagesText.innerText = myLibrary[i].pages;
    readStatusText.innerText = myLibrary[i].readStatus;
}