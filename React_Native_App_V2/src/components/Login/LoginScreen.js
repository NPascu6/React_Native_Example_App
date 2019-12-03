import React, { Component } from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet
} from 'react-native';

import LoginButton from './login_components/LoginButton';
import LoginTextInput from './login_components/LoginTextInput';


class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            value: "test",
            title: "Login Component"
        }
    }

    handleEmailChange = (email) => {
        this.setState({ email: email });
    }

    handlePasswordChange = (password) => {
        this.setState({ password: password });
    }

    handleLoginPress = () => {
        this.setState({ value: "Button Pressed" })
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.loginHeader}>{this.state.title}</Text>
                        <LoginTextInput
                            labelText="Email"
                            labelTextSize={14}
                            inputType="email"
                        />
                        <LoginTextInput
                            labelText="Password"
                            labelTextSize={14}
                            inputType="password"
                        />
                    </ScrollView>
                </View>
                <LoginButton />
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        flex: 1,
        backgroundColor: "#4c4cff"
    },
    scrollViewWrapper: {
        marginTop: 20,
        flex: 1
    },
    avoidView: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        flex: 1
    },
    loginHeader: {
        fontSize: 28,
        color: "white",
        fontWeight: "300",
        marginBottom: 40,
        textAlign: 'center'
    }
});

export default LoginScreen;