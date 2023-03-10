import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Navbar components/Home';
import About from './Navbar components/About';
import ContactUs from './Navbar components/ContactUs';
import MobileView from './Navbar components/MobileView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MobileView />} >
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='ContactUs' element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
