import React from 'react';
import { Grid } from 'semantic-ui-react';
import Log from './Log';
import GiveUpButton from './GiveUpButton';
import CheckerBoard from './CheckerBoard';
import Turn from './Turn';
import PopupModal from "./PopupModal";

export default class GamePage extends React.Component {
    render() {
        const { gameOver, modalContent, modalSize, color, log, playerTurn, selectedPos, player1PiecesPos, player2PiecesPos, isPlayer1, player1KingPos, player2KingPos } = this.props;
        return (
            <Grid
                textAlign='center'
                style={{ height: '100%' }}
                verticalAlign='middle'
            >
                <Grid.Row>
                    <Grid.Column width={6} style={{ margin: '1em' }}>
                        <CheckerBoard
                            isTurn={playerTurn}
                            color={color}
                            selectedPos={selectedPos}
                            player1PiecesPos={player1PiecesPos}
                            player2PiecesPos={player2PiecesPos}
                            isPlayer1={isPlayer1}
                            player1KingPos={player1KingPos}
                            player2KingPos={player2KingPos}
                        />
                        <Turn color={color} isTurn={playerTurn} />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Log logItems={log} />
                        <GiveUpButton/>
                        <PopupModal gameOver={gameOver} modalContent={modalContent} modalSize={modalSize}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
};
