import React, {Component} from 'react'
import {Button, Header, Modal} from 'semantic-ui-react'

export default class PopupModal extends Component {
    backToLobby(e) {
        e.preventDefault();
        window.location.href = "/";
    }

    render() {
        return (
            <Modal
                open={this.props.gameOver}
                // onClose={this.handleClose.bind(this)}
                basic
                size={this.props.modalSize}
            >
                <Header icon='announcement' content='Game Over'/>
                <Modal.Content>
                    <h3>{this.props.modalContent}</h3>
                </Modal.Content>
                <Modal.Actions>
                    <Button color="teal" onClick={this.backToLobby.bind(this)} inverted>
                        Back to lobby
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}
