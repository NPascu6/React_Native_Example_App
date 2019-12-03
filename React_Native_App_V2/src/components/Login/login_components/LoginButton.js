import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

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
                <Text style={styles.textStyle} onPress={this.props.handleLoginPress}>{this.state.label}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        alignSelf:"flex-end",
        borderColor: "white",
        borderWidth: 2,
        width: 60,
        margin: 2,
        borderRadius: 8,
        justifyContent: "center"
    },
    textStyle: {
        fontWeight:"bold",
        color: "white",
        padding: 2
    }
});


export default LoginButton;