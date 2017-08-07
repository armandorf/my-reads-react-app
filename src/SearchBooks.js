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
  }
}

export default SearchBooks
