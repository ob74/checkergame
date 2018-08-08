import React from 'react';
import ReactDOM from 'react-dom';
import LobbyPage from './components/LobbyPage';
import RouterContext from './components/RouterContext';

const app = document.getElementById('app');
ReactDOM.render(<RouterContext />, app);
