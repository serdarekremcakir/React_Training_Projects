import React, { Component } from 'react'
import Book from './Book';
import './BookList.css'

export class BookList extends Component {
  render() {

    console.log(this.props.books);

    const bookList = this.props.books.map((book, i) => {
      return <Book book={book} key={i}></Book>
    })
    return (
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">BOOKFOLIO</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="row">
            {bookList}
          </div>
        </div>
      </section>
    )
  }
}

export default BookList

