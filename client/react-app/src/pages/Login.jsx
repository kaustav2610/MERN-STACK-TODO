import axios from 'axios';
import React, { useContext, useState } from 'react'
import { toast } from 'react-hot-toast';
import { Link, Navigate } from 'react-router-dom'
import { context } from '../main';
import { server } from '../main';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {isAuthenticated,setIsAuthenticated,loading,setLoading}=useContext(context);
  

  const submitHandler = async(e) => {
    //stop reloading for
    e.preventDefault();
    setLoading(true)
    try {
      console.log(email,password)
      const {data}=await axios.post(`${server}/users/login`,
                                  {email,password},
                                  {headers:{"Content-Type": "application/json"},withCredentials:true})   //withcredential for cookie working
    
    toast.success(data.message)
    setIsAuthenticated(true)
    setLoading(false)

    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(false)
      setLoading(false)

    }
    
  };


  if(isAuthenticated) return <Navigate to={"/"}/>
  return (
    <div className='login'>
        <section>
            <form onSubmit={submitHandler}>
                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter Your Email"
                required
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter Your Password"
                required
              />
                <button type="submit" disabled={loading}>Login</button>
                <h4>Or</h4>
                <Link to="/register">Sign UP</Link>
            </form>
        </section>
    </div>
  )
}

export default Login