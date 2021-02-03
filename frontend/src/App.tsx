import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Home from "./pages/Home";
import Join from "./pages/Join";
import Teams from "./pages/TeamsContainer";

import TeamSnapLogo from "./components/TeamSnapLogo";

const BACKEND_API_URL =
    process.env.BACKEND_API_URL || "http://backend.localhost";

const teams = [
    {
        teamName: "Teamsnap Turtles",
    },
    {
        teamName: "TeamSnap Turkeys (because Turtles was already taken)",
    },
    {
        teamName: "Lion Brigade",
    },
];

const App: React.FC = () => {
    return (
        <Provider
            store={store({
                teams,
            })}
        >
            <Router>
                <div className="App">
                    <header className="App-header">
                        <Link to="/">
                            <div className="logo-container">
                                <TeamSnapLogo />
                                <span className="App-header-logo-text">
                                    MEGA TOURNAMENT
                                </span>
                            </div>
                        </Link>
                        <ul>
                            <li>
                                <Link to="/teams">View Teams</Link>
                            </li>
                            <li>
                                <Link to="/join">Register Teams</Link>
                            </li>
                        </ul>
                    </header>
                    <main className="container">
                        <Switch>
                            <Route path="/teams">
                                <Teams />
                            </Route>
                            <Route path="/join">
                                <Join baseurl={BACKEND_API_URL} />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </main>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
