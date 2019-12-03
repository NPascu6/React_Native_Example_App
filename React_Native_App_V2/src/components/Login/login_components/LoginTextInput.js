import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class LoginTextInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            secureInput: !(props.inputType === "text" || props.inputType === "email")
        };
    }

    toggleShowPassword = () => {
        this.setState({ secureInput: !this.state.secureInput });
    }

    render() {
        const {
            labelText,
            inputType } = this.props;

        return (
            <View style={styles.wrapper}>
                <Text style={styles.label}>{labelText}</Text>
                {inputType === "password" ? (
                    <TouchableOpacity
                        style={styles.showButton}
                        onPress={this.toggleShowPassword}
                    >
                        <Text style={styles.showButtonText}>
                            {this.state.secureInput ? "Show" : "Hide"}
                        </Text>
                    </TouchableOpacity>
                ) : null}
                <TextInput
                    style={styles.inputField}
                    autoCorrect={false}
                    secureTextEntry={this.state.secureInput}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        margin: 8
    },
    label: {
        fontWeight: "700",
        marginBottom: 10,
        color: "white",
        fontSize: 18
    },
    inputFiled: {
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5
    },
    inputField: {
        borderBottomColor: "white",
        margin: 1,
        padding: 2,
        borderWidth: 1,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0
    },
    showButton: {
        position: "absolute",
        right: 0
    },
    showButtonText: {
        color: "white",
        fontWeight: "700"
    }
});

export default LoginTextInput;