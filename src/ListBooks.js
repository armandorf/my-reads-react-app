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
  }
}

export default ListBooks
