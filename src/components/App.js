import { Routes, Route } from 'react-router-dom';
import '../css/App.css';
import Navbar from './Navbar';
import Homepage from '../pages';
import ShowsList from '../pages/showslist';
import Footer from './Footer';
import Login from '../pages/login';
import Signup from '../pages/signup';
import { useEffect, useState } from 'react';
import ShowsContext from '../context/ShowsContext';
import ShowsDesc from '../pages/showdesc';

function App() {

  const [shows, setShows] = useState([]);

  useEffect(() => {

    fetch("http://localhost:8000/shows")
    .then((res) => {
      return res.json()
    }).then(json => {
      setShows(json);
    }).catch((err)=>{
      console.log(`Error ${err}`);
    });

  }, []);

  return (
      <>
        <Navbar />
        <ShowsContext.Provider value = {{shows}}>
        <Routes>
            
          <Route path="/" element={<Homepage/>}/>
          <Route path="/showslist" element={<ShowsList/>}/>
          <Route path="/showsdesc/:showId" element = {<ShowsDesc />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
        </ShowsContext.Provider>
        <Footer /> 
        
      </>
  
  );
}

export default App;
