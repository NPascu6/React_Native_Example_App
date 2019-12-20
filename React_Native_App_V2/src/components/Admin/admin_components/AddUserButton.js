import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../../styles/SharedStyles';

class AddUserButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labelAdd: "Add user",
            labelSignUp: "Sign UP",
            isSignUpButton: false,
            user: {}
        }
    }

    render() {
        return (
            <TouchableOpacity style={styles.buttonStyle}>
                {
                    !this.props.isSignUp ?
                        <Text onPress={this.props.handleAdd} style={styles.textStyle}>{this.state.labelAdd}</Text> :
                        <Text onPress={this.props.handleAdd} style={styles.textStyle}>{this.state.labelSignUp}</Text>
                }
            </TouchableOpacity>
        )
    }
}




export default AddUserButton;