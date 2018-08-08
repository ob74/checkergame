import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import LobbyPage from './LobbyPage';
import AboutPage from './AboutPage';
import App from './App';

export default class RouterContext extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={LobbyPage} />
                    <Route path="about" component={AboutPage} />
                </Route>
            </Router>
        );
    }
}
