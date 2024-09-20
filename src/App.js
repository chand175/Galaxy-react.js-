
import {BrowserRouter as Routers , Routes , Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Training from './Pages/Training/Training';
import Price from './Pages/Pricing/Price';
import Contact from './Pages/Contacts/Contact';

import './App.css';

function App() {
  return (
    <div>
      

<Routers>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/training' element={<Training/>} />
    <Route path='/price' element={<Price/>} />
    <Route path='/contact' element={<Contact/>} />
  </Routes>
</Routers>


    </div>
  );
}

export default App;
