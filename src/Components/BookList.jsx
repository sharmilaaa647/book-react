import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BookItem from './BookItem';

const BookList = () => {
  const books = useSelector(state => state.books.books);

  return (
    <div>
      <h2>Book List</h2>
      <Link to="/add">Add Book</Link>
      {books.length ? (
        <ul>
          {books.map((book) => (
            <BookItem key={book.id} book={book} />
          ))}
        </ul>
      ) : (
        <p>No books available</p>
      )}
    </div>
  );
};

export default BookList;
