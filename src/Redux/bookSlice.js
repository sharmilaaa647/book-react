import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter(book => book.id !== action.payload);
    },
    editBook: (state, action) => {
      const { id, title, author } = action.payload;
      const existingBook = state.books.find(book => book.id === id);
      if (existingBook) {
        existingBook.title = title;
        existingBook.author = author;
      }
    },
  },
});

export const { addBook, deleteBook, editBook } = bookSlice.actions;
export default bookSlice.reducer;
