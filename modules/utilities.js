const insertBookIntoDom = (book, booksList) => {
  const bookElement = `
      <li class="book px-1 py-1">
        <div><strong>"${book.title}"</strong> by ${book.author}</div>
        <button data-id="${book.id}" class="book-remove">Remove</button>
      </li>`;
  const bookChild = document.createRange().createContextualFragment(bookElement);
  booksList.appendChild(bookChild);
};

export default insertBookIntoDom;
