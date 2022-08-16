import React, { Component } from 'react'
import BookList from './BookList';
import BookContextProvider from './Context/BookContext'
import ThemeContextProvider from './Context/ThemeContext'

export class App extends Component {

  render() {
    return (
        <ThemeContextProvider>
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
        </ThemeContextProvider>
    )
  }
}

export default App