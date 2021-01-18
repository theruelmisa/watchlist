import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './globalStyles';
import {
    HomePage 
} from './pages';


const App = () => {
    return (
        <Router>
            <GlobalStyles />
            <Switch>
                <Route exact path='/' component={HomePage} />
            </Switch>
        </Router>
    )
};

export default App;
