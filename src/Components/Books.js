import React from 'react';
import Book from './Book';

const Books = () => {
  return (
    <>
      <div className="books-shelf">
        <Book title="My Book" author="Me" />
      </div>
    </>
  );
};

export default Books;
