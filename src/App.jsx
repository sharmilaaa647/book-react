
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './Components/BookList';
import AddBook from './Components/AddBook';
import EditBook from './Components/EditBook';


function App() {


  return (
    <Router>
      <div className="App">
        <h1>Book Management App</h1>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
        </Routes>
      </div>
    </Router>
    
  )
}

export default App

