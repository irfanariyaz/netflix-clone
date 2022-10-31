import React, { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import MovieProfile from "./screens/MovieProfile"
import ProfileScreen from './screens/ProfileScreen';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,

  
} from "react-router-dom";
import { auth } from './firebase';
import {useDispatch, useSelector} from 'react-redux'
import { logout,login,selectUser } from './features/userSlice';


function App() {

  const user=useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(()=>{
   const unsubscribe= auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(
          login({
          uid:userAuth.uid,
          email:userAuth.email
        }))
        //login
      }
      else{
        dispatch(logout())
      }
    })
    return unsubscribe
  },[dispatch])
  

 
  return (
    <div className="app">


      <Router>
      
         {!user ?
        (<Login />)  :
         (
         
          <Routes>
          <Route  path="/"  element={<HomeScreen />} />
       
   
         
         <Route  path="/profile" element={<ProfileScreen />} />
         <Route path='/movie-:movieid' element={<MovieProfile />} />
             
        
          </Routes>
         )}
         
         
         

      
      </Router>
      
        
      
      
    </div>
  );
}

export default App;
