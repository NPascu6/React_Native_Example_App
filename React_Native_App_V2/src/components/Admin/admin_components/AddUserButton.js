import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

class AddUserButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labelAdd: "Add user",
            labelSignUp: "Sign UP",
            isSignUpButton: false,
        }
    }

    render() {
        return (
            <TouchableOpacity style={styles.buttonStyle}>
                {!this.props.isSignUp ?
                    <Text style={styles.textStyle}>{this.state.labelAdd}</Text> :
                    <Text style={styles.textStyle}>{this.state.labelSignUp}</Text>
                }
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        alignSelf: "flex-end",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 15,
        width: 100,
        margin: 10,
        alignSelf: 'center',
        backgroundColor: 'gray'
    },
    textStyle: {
        fontWeight: "bold",
        color: "white",
        padding: 2,
        textAlign: 'center',
        alignContent: 'center',
        fontSize: 20
    }
});

export default AddUserButton;