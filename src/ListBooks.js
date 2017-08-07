import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class ListBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onEditBook: PropTypes.func.isRequired
  }
}

export default ListBooks
