import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

class LogoutButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labe: 'Logout'
        }
    }

    render() {
        return (
            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.textStyle} onPress={this.props.logout}>{this.state.labe}</Text></TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        alignSelf: "flex-end",
        borderColor: "black",
        backgroundColor:"gray",
        borderWidth: 1,
        width: 90,
        margin: 2,
    },
    textStyle: {
        fontWeight: "bold",
        color: "white",
        padding: 2,
        textAlign: 'center',
        alignContent: 'center',
        fontSize: 16
    }
});

export default LogoutButton;