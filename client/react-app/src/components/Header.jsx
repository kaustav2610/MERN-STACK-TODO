import axios from 'axios';
import React, { useContext } from 'react'
import { toast } from 'react-hot-toast';
import { Link, Navigate } from 'react-router-dom';
import { context } from '../main';
import { server } from '../main';




const Header = () => {

  const {isAuthenticated,setIsAuthenticated,loading,setLoading}=useContext(context);

  const logoutHandler = async() => {
    setLoading(true)
    try {
      
      
      await axios.get(`${server}/users/logout`,
                                  {withCredentials:true})   //withcredential for cookie working
    
    toast.success("Logged out Successfully")
    setIsAuthenticated(false)
    setLoading(false)
    

    } catch (error) {
      toast.error("Error occur : Still Logged In");
      setIsAuthenticated(true)
      setLoading(false)

    }

  }
 
  
  return (
    <nav className='header'>
        <div>
            <h2>Todo APP</h2>
        </div>
        
        <article>
            <Link to={"/"}>Home</Link>
            <Link to={"/profile"}>Profile</Link>
            {
              isAuthenticated? <button className='btn' disabled={loading} onClick={logoutHandler} >Log Out</button> : <Link to={"/login"}>login</Link>
            }
            
            
        </article>
    </nav>
  )
}

export default Header