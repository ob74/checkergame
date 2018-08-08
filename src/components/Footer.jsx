import React from 'react';
import { Header } from 'semantic-ui-react';

export default class Footer extends React.Component {
    render() {
        return (
            <Header className="footer" as="a" href="#/about" style={{ color: "#616161", marginBottom: "1em" }} textAlign='center'>About us :)</Header>
        );
    }
};
