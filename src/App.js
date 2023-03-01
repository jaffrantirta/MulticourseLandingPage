import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contact, Courses, Gallery, Home } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/galleries' element={<Gallery />} />
        <Route path='/class/:type' element={<Courses />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
