## About this Project

This is a React web app that catalogs a list of books by their reading status (currently reading, want to read, and read).

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). It makes use of stateless and stateful React components, React Router, and sortby. It also makes Rest API calls to a custom server from Udacity that retrieves books.

## How to Install and Run Project
To run this project locally, clone or fork this repository and run the following npm scripts:
```sh
$ npm install
$ npm start
```

## About the Search Functionality
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Contributing

This repository is the first project in Udacity's React Nanodegree. I may be making some more changes in the future, but for now I am not planning to accept any pull requests until I set up a Node server for it (instead of using Udacity's).
