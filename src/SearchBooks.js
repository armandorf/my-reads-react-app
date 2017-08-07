import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    searchResult: PropTypes.array.isRequired,
    onEditBook: PropTypes.func.isRequired,
    onUpdateQuery: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({query: query.trim()})
    this.props.onUpdateQuery(query)
  }

  render() {
    const {books, searchResult, onEditBook} = this.props

    // match status of each book in searchResult with books in main page
    let matchingBooks = []
    if (searchResult.length > 0) {
      matchingBooks = searchResult.map(book => {
        let match = books.find(b => b.id === book.id)
        if (!match) {
          book.shelf = 'none'
        }
        return match ? match : book
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
              value={this.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {matchingBooks && (matchingBooks.map(book => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail})` }}></div>
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
            )))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
