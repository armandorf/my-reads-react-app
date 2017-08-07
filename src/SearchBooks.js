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
}

export default SearchBooks
