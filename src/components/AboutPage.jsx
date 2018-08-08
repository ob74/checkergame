import React from 'react';
import { Grid, Header, Label, List, Button } from 'semantic-ui-react';

export default class AboutPage extends React.Component {
    handleClick(e) {
        e.preventDefault();
        window.location = "#";
    }

    render() {
        return (
            <div className="pusher">
                <Grid
                    textAlign='center'
                    style={{ height: '100%' }}
                    verticalAlign='middle'
                >
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header className='gameTitle' as='div' style={{ color: "#616161" }} textAlign='center'>
                            About us
                        </Header>
                        <Label>Group 4</Label>
                        <List items={["Bruce Zhao", "Nhan Nguyen", "Omair Bhore", "Phuc Ngo"]} />
                        <Header as="h3" style={{ color: "#9E9E9E" }}>Checkers version 1.0.0</Header>
                        <Header as="h3" style={{ color: "#9E9E9E" }}>Release Panda Express</Header>
                        <Button onClick={this.handleClick.bind(this)} labelPosition='left' icon='left chevron' content='Back' style={{ color: "teal" }} />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
};
