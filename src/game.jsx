import React from 'react';
import ReactDOM from 'react-dom';
import GamePage from './components/GamePage';
import {observe} from './components/Validation';

const app = document.getElementById('app');

observe((gameOver, modalContent, modalSize, color, log, playerTurn, selectedPos, player1PiecesPos, player2PiecesPos, isPlayer1, player1KingPos, player2KingPos) =>
    ReactDOM.render(
        <GamePage
            gameOver = {gameOver}
            modalContent = {modalContent}
            modalSize = {modalSize}
            color={color}
            log={log}
            playerTurn={playerTurn}
            selectedPos={selectedPos}
            player1PiecesPos={player1PiecesPos}
            player2PiecesPos={player2PiecesPos}
            isPlayer1={isPlayer1}
            player1KingPos={player1KingPos}
            player2KingPos={player2KingPos}
        />,
        app
    )
);
