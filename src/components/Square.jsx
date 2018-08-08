import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Square extends Component {
    render() {
        const {black} = this.props;
        const backgroundColor = black ? '#424242' : '#FFF3E0';

        return (
            <div
                style={{
                    backgroundColor,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                }}
            >
                {this.props.children}
            </div>
        );
    }
}

Square.propTypes = {
    black: PropTypes.bool
};
