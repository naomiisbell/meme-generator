import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MemeGenerator from "./components/MemeGenerator";
import HomePage from "./components/HomePage";
import LoginOrSignUp from "./components/LoginOrSignUp"


export default function App() {
  return (
    <Router>
      <div className="nav__bar">
        <h1 className="header">Meme University</h1>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/create">Create a Meme</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/create">
            <MemeGenerator />
          </Route>
          <Route path="/login">
            <LoginOrSignUp />
          </Route>
        </Switch>
    </Router>
  );
}

