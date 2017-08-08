import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
import {
  CURRENTLY_READING_BOOKS_VAL,
  CURRENTLY_READING_BOOKS_LABEL,
  WANT_TO_READ_BOOKS_VAL,
  WANT_TO_READ_BOOKS_LABEL,
  READ_BOOKS_VAL,
  READ_BOOKS_LABEL
} from './constants';

function ListBooks(props) {

  const {books, onEditBook} = props;
  const currentlyReadingBooks = [];
  const wantToReadBooks = [];
  const readBooks = [];

  books.forEach((book) => {
    switch(book.shelf) {
      case CURRENTLY_READING_BOOKS_VAL:
        currentlyReadingBooks.push(book);
        break;
      case WANT_TO_READ_BOOKS_VAL:
        wantToReadBooks.push(book);
        break;
      case READ_BOOKS_VAL:
        readBooks.push(book);
        break;
      default:
        break;
    }
  });

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            books={currentlyReadingBooks}
            shelf={CURRENTLY_READING_BOOKS_LABEL}
            onEditBook={onEditBook}
          />
          <BookShelf
            books={wantToReadBooks}
            shelf={WANT_TO_READ_BOOKS_LABEL}
            onEditBook={onEditBook}
          />
          <BookShelf
            books={readBooks}
            shelf={READ_BOOKS_LABEL}
            onEditBook={onEditBook}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );

}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onEditBook: PropTypes.func.isRequired
};

export default ListBooks;
