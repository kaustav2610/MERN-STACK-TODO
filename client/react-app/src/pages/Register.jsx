import React, { useContext, useState } from "react";
import { Link ,Navigate } from "react-router-dom";
import axios from "axios";
import { context, server } from "../main";
import toast from "react-hot-toast";


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {isAuthenticated,setIsAuthenticated,loading,setLoading}=useContext(context);
  
  const submitHandler = async(e) => {

    setLoading(true)
    //stop reloading for
    e.preventDefault();
    try {
      console.log(name,email,password)
      const {data}=await axios.post(`${server}/users/new`,
                                  {name,email,password},
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
    <div className="login">
      <section>
        <form onSubmit={submitHandler}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Your Name"
            required
          />
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

          <button type="submit" disabled={loading}>Sign Up</button>
          <h4>Or</h4>
          <Link to="/login">Log In</Link>
        </form>
      </section>
    </div>
  );
};

export default Register;
