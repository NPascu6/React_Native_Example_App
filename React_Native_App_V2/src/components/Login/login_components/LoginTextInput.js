import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../../styles/LoginStyles';

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
                    placeholder="Type here..."
                />
            </View>
        );
    }
}

export default LoginTextInput;