import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './globalStyles';
import { Header, Sidebar, Movies } from './components';


const App = () => {

    return (
        <>
            <Router>
                <GlobalStyles />
                <Header />
                <Sidebar />
                <Switch>
                    <Route exact path="/">
                        <Movies title="Trending" />
                    </Route>
                    <Route exact path="/favorites">
                        <Movies title="Favorites" />
                    </Route>
                    <Route exact path="/upcoming">
                        <Movies title="Upcoming" />
                    </Route>
                    <Route exact path="/top-rated">
                        <Movies title="Top Rated" />
                    </Route>
                    <Route exact path="/now-showing">
                        <Movies title="Now Showing" />
                    </Route>
                </Switch>
            </Router>
        </>
    )
};

export default App;

// TODO: 

// REDO EVERY THING
// 2. Add more to tool bar such as welcome guest text
// 3. Movies based off categories
// 4. watchlist