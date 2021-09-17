import React from 'react';
import LandingPage from './LandingPage';
import Login from './Login';
import {
    Switch,
    Route
} from "react-router-dom";

function App() {
    return (
        <div>
            <Switch>
                <Route path="/login" component={Login} />
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/admin" component={Login} />
            </Switch>
        </div>
    );
}

export default App;

// app that houses login component