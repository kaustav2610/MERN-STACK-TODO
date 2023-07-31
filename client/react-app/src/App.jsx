import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import { context } from "./main";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import { server } from "./main";



function App() {

  const { setUser, setIsAuthenticated, setLoading } = useContext(context);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${server}/users/me`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        setIsAuthenticated(true);
        setLoading(false);
      })
      .catch((error) => {
        setUser({});
        setIsAuthenticated(false);
        setLoading(false);
      });
  }, []);
  
    
  


  return (
    <Router>
      <Header/> 
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        

      </Routes>

      <Toaster/>
    </Router>
  )
}

export default App
