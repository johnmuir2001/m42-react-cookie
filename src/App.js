import './App.css';
import {useEffect, useState} from "react";
// import MoviedCard from './components/MovieCard';
import Login from './components/Login';
import ReadUsers from './components/ReadUsers';
import RegisterUser from './components/RegisterUser';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';
import LogoutUser from './components/Logout';

import { Cookies } from 'react-cookie';
const API_URL = process.env.REACT_APP_API_URL

// using the react-cookie functionality without using the useCookie hook
const cookies = new Cookies();

function App() {
//STATE VARIABLES
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState("");

  async function searchMovies(title) {
    const req = await fetch (`${API_URL}&s=${title}`);
    const res = await req.json();
    setMovies(res.Search);
  }

  useEffect(() => {
    // when app loads it sets the state to pass log in if name exists in cookies
    setUser(cookies.get('name'))
    // searchMovies("Batman");
  }, [])

    return (
    <div className="App">
      <h1>Register</h1>
      <RegisterUser setter={setUser}/>
      <br></br>

      {user ?
      <div>
        <h2> Hello! welcome {user} you have logged in!</h2>
        <ReadUsers />
        <br></br>
        <UpdateUser />
        <br></br>
        <DeleteUser />
        <br></br>
        <LogoutUser setUserState={setUser} />
      </div>
        : <div>
        <h2>Please Login</h2>
        <h1>Login</h1> 
        <Login setter={setUser}/>
        </div>      }
      
    </div>
  );
}

export default App;
