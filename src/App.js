import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Users from "./components/Users";
import Greetings from "./components/Greetings";
import EventHandler from "./components/EventHandler";
import TimeMeasurement from "./components/TimeMeasurement"

function App() {
  return (
    <div className="header">
      <div className="header-title" data-test="headerTitle">
        <h1> React POC</h1>
      </div>
      <div className="App">
        <div className="menu">
          <ul className="menu-ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/greetings">Greetings</Link>
            </li>
            <li>
              <Link to="/events">Event Handling</Link>
            </li>
            <li>
              <Link to="/time">Time Measurement</Link>
            </li>
            
          </ul>
        </div>
        <div className="App-intro">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Home
                  lifeCycleMethod="static getDerivedStateFromProps"
                  {...props}
                />
              )}
            />
            <Route path="/articles" component={Articles} />
            <Route path="/users" component={Users} />
            <Route
              path="/greetings"
              render={(props) => (
                <Greetings name="PropTypes used along with Router" {...props} />
              )}
            />
            <Route
              path="/events"
              render={(props) => (
                <EventHandler buttonName="Update Data" {...props} />
              )}
            />

            <Route path="/time" component={TimeMeasurement} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
