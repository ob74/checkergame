import React from 'react';
import { Header } from 'semantic-ui-react';

export default class Turn extends React.Component {
    render() {
        const { color, isTurn } = this.props;
        let content;
        if ((color == 1 && isTurn == 1) || (color == 2 && isTurn == 2)) {
            content = "You can go";
        }
        else if (color == 0) {
            content = "Waiting for another player...";
        }
        else {
            content = "It's not your turn";
        }

        let yourColor;
        if (color == 1) {
            yourColor = "You are red";
        }
        else if (color == 2) {
            yourColor = "You are black";
        }
        return (
            <div style={{ marginTop : "1em"}}>
                <Header as='h1' textAlign='center' style={{ margin: 'auto' }}>
                    {content}
                </Header>
                <Header style={{ marginTop : "0 !important", margin: 'inherit' }} as='h3' textAlign='center'>
                    {yourColor}
                </Header>
            </div>
        );
    }
};
