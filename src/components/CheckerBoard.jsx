import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Piece from './Piece.jsx';
import SquareContainer from './SquareContainer.jsx';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class CheckerBoard extends Component {
    renderSquare(i) {
        const x = i % 8;
        const y = Math.floor(i / 8);

        return (
            <div key={i} style={{
                width: '12.5%',
                height: '12.5%'
            }}>
                <SquareContainer x={x} y={y}>
                    {this.renderPiece(x, y)}
                </SquareContainer>
            </div>
        );
    }

    renderPiece(x, y) {
        var piece = [x, y];

        // RENDER Player 1 Piece
        var i = this.props.player1PiecesPos.findIndex(function (n) {
            return piece.every(function (p, q) {
                return p === n[q]
            });
        });

        if (i !== -1) {
            return <Piece color={this.props.color} isTurn={this.props.isTurn} isPlayer1={true} pos={[x, y]} isKing={this.props.player1KingPos[i]}/>;
        }

        // RENDER Player 2 Piece
        i = this.props.player2PiecesPos.findIndex(function (n) {
            return piece.every(function (p, q) {
                return p === n[q]
            });
        });

        if (i !== -1) {
            return <Piece color={this.props.color} isTurn={this.props.isTurn} isPlayer1={false} pos={[x, y]} isKing={this.props.player2KingPos[i]}/>;
        }
    }

    render() {
        const squares = [];
        for (let i = 0; i < 64; i++) {
            squares.push(this.renderSquare(i));
        }

        return (
            <div style={{
                outline: '0.4em solid #212121',
                width: '35em',
                height: '35em ',
                display: 'flex',
                flexWrap: 'wrap',
                margin: ' 0 auto',
                marginTop: '1.5em'
            }}>
                {squares}
            </div>
        );
    }
}

CheckerBoard.propTypes = {
    selectedPos: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    isPlayer1: PropTypes.bool.isRequired,
    player1PiecesPos: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number.isRequired).isRequired).isRequired,
    player2PiecesPos: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number.isRequired).isRequired).isRequired,
    player1KingPos: PropTypes.arrayOf(PropTypes.bool.isRequired).isRequired,
    player2KingPos: PropTypes.arrayOf(PropTypes.bool.isRequired).isRequired
};

export default DragDropContext(HTML5Backend)(CheckerBoard);
