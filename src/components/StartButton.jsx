import React from 'react';
import { Button } from 'semantic-ui-react';
import axios from 'axios';

export default class StartButton extends React.Component {
    handleClick(e) {
        e.preventDefault();
        const { username } = this.props;
        axios.post("/newPlayer", {
            username
        }).then((res) => {
            window.location.href = "/game";
        });
    }

    render() {
        return <Button onClick={this.handleClick.bind(this)} className='startBtn' style={{ backgroundColor: '#009688', color: '#FAFAFA' }} size='large'>Start</Button>
    }
};
