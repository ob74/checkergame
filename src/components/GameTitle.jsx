import React from 'react';
import { Header } from 'semantic-ui-react';

export default class GameTitle extends React.Component {
    render() {
        return (
            <Header className='gameTitle' as='div' style={{ color: "#009688" }} textAlign='center'>
                Checkers
            </Header>
        );
    }
};
