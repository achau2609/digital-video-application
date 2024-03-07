import { Routes, Route } from 'react-router-dom';
import '../css/App.css';
import Navbar from './Navbar';
import Homepage from '../pages';
import ShowsList from '../pages/showslist';
import Footer from './Footer';
import Login from '../pages/login';
import Signup from '../pages/signup';

function App() {
  return (
      <div>

        <Navbar />
        <Routes>
            
          <Route path="/" element={<Homepage/>}/>
          <Route path="/showslist" element={<ShowsList/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
        <Footer /> 

      </div>
  
  );
}

export default App;
