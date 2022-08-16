import React, { Component } from 'react'
import Book from './Book';
import './BookList.css'
import { BookContext } from './Context/BookContext';
import { ThemeContext } from './Context/ThemeContext';


export class BookList extends Component {


  render() {

    return (
      <ThemeContext.Consumer>
        {(contextTheme) => (
          <BookContext.Consumer>
            {
              contextBook => {

                const {changeTheme, isDarkTheme, dark, light } = contextTheme;
                const theme = isDarkTheme ? dark : light;





                return (
                  <section className="page-section" style={{background: theme.bg, color:theme.txt}} id="portfolio">
                    <div className="container">
                      <div className="text-center">
                        <h2 className="section-heading text-uppercase">BOOKFOLIO</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        <button type='button' className='btn btn-sm btn-info' style={{marginTop: -70}} onClick={changeTheme}>Change Theme</button>
                      </div>
                      <div className="row">
                        {contextBook.books.map((book, i) => {
                          return <Book book={book} key={i}></Book>
                        })}
                      </div>
                    </div>
                  </section>
                )
              }
            }
          </BookContext.Consumer>
        )}

      </ThemeContext.Consumer>


    )
  }
}

export default BookList
