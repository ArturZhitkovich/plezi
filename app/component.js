import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from 'common/routes';
import HomePage from 'pages/home';
import MoviePage from 'pages/movie';
import NotFoundPage from 'pages/not-found';

import './index.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact path={routes.home}
                    component={HomePage} />
                <Route
                    path={routes.movie}
                    component={MoviePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
