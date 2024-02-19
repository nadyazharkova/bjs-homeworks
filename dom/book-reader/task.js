const bookControlFontSize = Array.from(document.querySelectorAll('.font-size'));
const fontSizeSmall = bookControlFontSize[0];
const fontSize = bookControlFontSize[1];
const fontSizBig = bookControlFontSize[2];
const book = document.getElementById('book');

bookControlFontSize[0].addEventListener('click',(event) => {
    bookControlFontSize[0].classList.add('font-size_active');
    bookControlFontSize[1].classList.remove('font-size_active');
    bookControlFontSize[2].classList.remove('font-size_active');
    book.classList.add('book_fs-small');
    book.classList.remove('book_fs-big');
    event.preventDefault();
})

bookControlFontSize[1].addEventListener('click',(event) => {
    bookControlFontSize[1].classList.add('font-size_active');
    bookControlFontSize[0].classList.remove('font-size_active');
    bookControlFontSize[2].classList.remove('font-size_active');
    book.classList.remove('book_fs-small');
    book.classList.remove('book_fs-big');
    event.preventDefault();
})

bookControlFontSize[2].addEventListener('click',(event) => {
    bookControlFontSize[2].classList.add('font-size_active');
    bookControlFontSize[1].classList.remove('font-size_active');
    bookControlFontSize[0].classList.remove('font-size_active');
    book.classList.add('book_fs-big');
    book.classList.remove('book_fs-small');
    event.preventDefault();
})