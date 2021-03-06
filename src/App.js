import React from 'react';
import { Route } from 'react-router-dom';
import sortBy from 'sort-by';
import * as BooksAPI from './BooksAPI';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import './App.css';
import {
  MAX_RESULTS,
  MAIN_PAGE_STR,
  SEARCH_PAGE_STR
} from './constants';

class BooksApp extends React.Component {
  state = {
    books: [],
    searchResult: []
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      books.sort(sortBy('title'));
      this.setState({ books });
    })
  }

  componentWillReceiveProps(nextProps) {
    BooksAPI.getAll().then((books) => {
      books.sort(sortBy('title'));
      this.setState({ books });
    });
    this.setState({ searchResult: [] })
  }

  editBook = (book, shelf) => {
    this.setState(state => {
      state.books.map(b => {
        b.shelf = b.id === book.id ? shelf : b.shelf;
        return b;
      })
    });
    BooksAPI.update(book, shelf);
  };

  searchBooks = (query) => {
    BooksAPI.search(query.trim(), MAX_RESULTS).then((books) => {
      if (books && Array.isArray(books)) {
        books.sort(sortBy('title'));
        this.setState({ searchResult: books });
      } else {
        this.setState({ searchResult: [] });
      }
    });
  };

  render() {
    return (
      <div className="app">
        <Route exact path={MAIN_PAGE_STR} render={() => (
          <ListBooks
            books={this.state.books}
            onEditBook={this.editBook}
          />)}
        />
        <Route path={SEARCH_PAGE_STR} render={({ history }) => (
          <SearchBooks
            books={this.state.books}
            searchResult={this.state.searchResult}
            onEditBook={this.editBook}
            onUpdateQuery={this.searchBooks}
          />)}
        />
      </div>
    );
  }
}

export default BooksApp;
