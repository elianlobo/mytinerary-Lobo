
import './styles/App.css';
import NavBar from './components/NavBar'
//import Body from './components/Body'
import Footer from './components/Footer'
//import Carousel from './components/Carrousel'
import Index from './pages/Index'
import Cities from './pages/Cities'
import Error from './pages/Error'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/index' element={<Index />} />
      <Route path='/Home' element={<Index />} />
      <Route path='/Cities' element={<Cities />} />
      <Route path='/*' element={<Error />} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
