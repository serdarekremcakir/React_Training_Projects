import React, { Component } from 'react'
import BookList from './BookList';
import BookContextProvider from './Context/BookContext'

export class App extends Component {

  render() {
    return (
      <div>
        <BookContextProvider>
          <BookList />
        </BookContextProvider>

      </div>
    )
  }
}

export default App