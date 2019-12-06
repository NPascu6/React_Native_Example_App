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
                <Text style={styles.textStyle} onPress={this.props.handleLogin}>{this.state.label}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        alignSelf:"flex-end",
        borderColor: "white",
        borderWidth: 1,
        borderRadius:15,
        width: 100,
        margin: 10,
        alignSelf:'center'
    },
    textStyle: {
        fontWeight:"bold",
        color: "white",
        padding: 2,
        textAlign: 'center',
        alignContent: 'center',
        fontSize: 20
    }
});

export default LoginButton;