import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Gallery, Home } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/galleries' element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
