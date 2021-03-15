import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './globalStyles';


const App = () => {
    return (
        <Router>
            <GlobalStyles />
            <h1>Movie App v3</h1>
        </Router>
    )
};

export default App;

// TODO: 

// REDO EVERY THING
// 2. Add more to tool bar such as welcome guest text
// 3. Movies based off categories
// 4. watchlist