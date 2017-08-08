import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './Book';

function SearchBooks(props) {

  const {books, searchResult, onEditBook, onUpdateQuery} = props;

  // match status of each book in searchResult with books in main page
  let matchingBooks = [];
  if (searchResult.length > 0) {
    matchingBooks = searchResult.map(book => {
      let match = books.find(b => b.id === book.id);
      if (!match) {
        book.shelf = 'none';
      }
      return match ? match : book;
    })
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={(event) => onUpdateQuery(event.target.value.trim())}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {matchingBooks && (matchingBooks.map(book => (
            <li key={book.id}>
              <Book
                book={book}
                onEditBook={onEditBook}
              />
            </li>
          )))}
        </ol>
      </div>
    </div>
  )
}

SearchBooks.propTypes = {
  books: PropTypes.array.isRequired,
  searchResult: PropTypes.array,
  onEditBook: PropTypes.func.isRequired,
  onUpdateQuery: PropTypes.func.isRequired
};

export default SearchBooks;
