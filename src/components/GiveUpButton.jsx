import React from 'react';
import { Button } from 'semantic-ui-react';
import { giveup } from './Validation.jsx'

export default class GiveUpButton extends React.Component {
    handleClick(e) {
        e.preventDefault();
        giveup();
    }

    render() {
        return <Button onClick={this.handleClick.bind(this)} className='startBtn' style={{ backgroundColor: '#009688', color: '#FAFAFA' }} size='large'>RAGE QUIT!</Button>
    }
};
