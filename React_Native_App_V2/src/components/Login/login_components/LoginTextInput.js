import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class LoginTextInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            secureInput: !(props.inputType === "text" || props.inputType === "userName")
        };
    }

    toggleShowPassword = () => {
        this.setState({ secureInput: !this.state.secureInput });
    }

    render() {
        const {
            labelText,
            inputType,
            onChangeText } = this.props;

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
                    onChangeText={onChangeText}
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
        width:300,
        alignSelf:'center'
    },
    label: {
        fontWeight: "700",
        color: "black",
        fontSize: 14,
        padding:5,
        alignContent:'center',
        textAlign:'center',
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor:'white',
        width:180,
        alignSelf:'center'
    },
    inputFiled: {
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5
    },
    inputField: {
        borderBottomColor: "white",
        marginBottom: 20,
        padding: 2,
        borderWidth: 1,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        color: "white"
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