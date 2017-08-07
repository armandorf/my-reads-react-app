import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class ListBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onEditBook: PropTypes.func.isRequired
  }

  render() {
    const {books, onEditBook} = this.props
    const CURRENTLY_READING_BOOKS_STR = 'currentlyReading'
    const WANT_TO_READ_BOOKS_STR = 'wantToRead'
    const READ_BOOKS_STR = 'read'
    const currentlyReadingBooks = []
    const wantToReadBooks = []
    const readBooks = []

    books.forEach((book) => {
      switch(book.shelf) {
        case CURRENTLY_READING_BOOKS_STR:
          currentlyReadingBooks.push(book)
          break
        case WANT_TO_READ_BOOKS_STR:
          wantToReadBooks.push(book)
          break
        case READ_BOOKS_STR:
          readBooks.push(book)
          break
        default:
          break
      }
    })

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {/* CURRENTLY READING SECTION */}
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {currentlyReadingBooks.map(book => book.shelf === CURRENTLY_READING_BOOKS_STR && (
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                          <div className="book-shelf-changer">
                            <select value={book.shelf} onChange={(event) => onEditBook(book, event.target.value)}>
                              <option value="none" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">
                          {book.authors && book.authors.join(', ')}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            {/* WANT TO READ SECTION */}
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {wantToReadBooks.map(book => book.shelf === WANT_TO_READ_BOOKS_STR && (
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                          <div className="book-shelf-changer">
                            <select value={book.shelf} onChange={(event) => onEditBook(book, event.target.value)}>
                              <option value="none" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">
                          {book.authors.join(', ')}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            {/* READ SECTION */}
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {readBooks.map(book => book.shelf === READ_BOOKS_STR && (
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                          <div className="book-shelf-changer">
                            <select value={book.shelf} onChange={(event) => onEditBook(book, event.target.value)}>
                              <option value="none" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">
                          {book.authors.join(', ')}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
