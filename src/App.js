import React from "react";
import './components/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MemeGenerator from "./components/MemeGenerator";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp"
import Login from "./components/Login"


export default function App() {
  return (
    <Router>
      <div className="nav__bar">
        <h1 className="header">mEmE uNiVeRsiTy</h1>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/create">Create a Meme</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Switch>
        <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/create">
            <MemeGenerator />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
    </Router>
  );
}

