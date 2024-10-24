import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../Redux/bookSlice';
import { Link } from 'react-router-dom';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <h3>{book.title}</h3>
      <p>by {book.author}</p>
      <button onClick={() => dispatch(deleteBook(book.id))}>Delete</button>
      <Link to={`/edit/${book.id}`}>Edit</Link>
    </li>
  );
};

export default BookItem;
