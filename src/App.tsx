import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import MobileView from './Navbar components/MobileView';
import Shippers from './Navbar components/SolutionsComponents/Shippers';
import DeliveryAgents from './Navbar components/SolutionsComponents/DeliveryAgents';
import ThirdPartyProviders from './Navbar components/SolutionsComponents/ThirdPartyProviders';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MobileView />} >
          <Route path='home' element={<Home />} />
          {/* Solutions Routing */}
          <Route path='Solutions' >
            <Route index path='Shippers' element={<Shippers/>}/>
            <Route path='DeliveryAgents' element={<DeliveryAgents/>}/>
            <Route path='ThirdPartyProviders' element={<ThirdPartyProviders/>}/>
          </Route>
          <Route path='about' element={<About />} />
          <Route path='ContactUs' element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
