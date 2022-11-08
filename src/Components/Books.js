import React from 'react';
import Book from './Book';
import AddNewBook from './AddNewBook';

function Books() {
  return (
    <>
      <div className="books-shelf">
        <Book title="My Book" author="Me" />
      </div>
      <AddNewBook />
    </>
  );
}

export default Books;
