import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import {Route,Switch, Link} from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">
        Home
        </Link>
        <Link to="/contact">
        Contact
        </Link>
        </nav> 
     {/* <Switch> */}
       <Route path="/contact">
        <h1>Contact Page</h1>
       </Route>
       <Route path="/">
         <Home/>
           </Route>
           {/* </Switch> */}
    </div>
  );
}

export default App;
