import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../../styles/SharedStyles';

class LoginButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: "Login"
        }
    }

    render() {
        return (
            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.textStyle} onPress={this.props.handleLogin}>{this.state.label}</Text>
            </TouchableOpacity>
        )
    }
}

export default LoginButton;