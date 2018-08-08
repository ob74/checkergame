import React from 'react';
import { Card, List } from 'semantic-ui-react';

export default class Log extends React.Component {
    render() {
        const { logItems } = this.props;
        return (
            <Card fluid>
                <Card.Content>
                    <Card.Header style={{ color: "#009688" }}>
                        Activity Log
                    </Card.Header>
                </Card.Content>
                <Card.Content className="logList" style={{ overflowY: 'auto' }}>
                    <List relaxed divided items={logItems.map((item, i) => ({ content: item, key: i }))} />
                </Card.Content>
            </Card>
        );
    }
};
