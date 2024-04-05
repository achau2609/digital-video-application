import { Routes, Route } from 'react-router-dom';
import '../css/App.css';
import Navbar from './Navbar';
import Homepage from '../pages';
import ShowsList from '../pages/showslist';
import Footer from './Footer';
import Login from '../pages/login';
import Signup from '../pages/signup';
import ShowsDesc from '../pages/showdesc';
import UserProfile from '../pages/userprofile';
import UserContext from '../context/UserContext';
import { useState } from 'react';

function App() {

  const [loginStatus, setLoginStatus] = useState(false);
  const [username, setUsername] = useState('');

  return (
      <>
        <UserContext.Provider value = {{loginStatus, setLoginStatus, username, setUsername}}>
        <Navbar />
        
        <Routes errorElement={<p>Oops! Something Went Wrong</p>}>
            
          <Route path="/" element={<Homepage/>}/>
          <Route path="/showslist" element={<ShowsList/>}/>
          <Route path="/showsdesc/:showId" element = {<ShowsDesc />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>

          {loginStatus ? <>
            <Route path="/myaccount" element={<UserProfile />} />
          </> : <></>}
          
        </Routes>
        
        <Footer /> 
        </UserContext.Provider>
      </>
  
  );
}

export default App;
