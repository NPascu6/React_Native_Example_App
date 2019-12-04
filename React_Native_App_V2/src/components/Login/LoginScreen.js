import React, { Component } from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as ActionCreators  from '../../actions/loginAction'

import LoginButton from './login_components/loginButton';
import LoginTextInput from './login_components/loginTextInput';

mapStateToProps = (state) => { return { user: state.loginReducers.user}; }
mapDispatchToProps = (dispatch) => { return bindActionCreators(ActionCreators, dispatch); }

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            value: "test1",
            title: "Login Component"
        }
    }

    handleEmailChange = (email) => {
        this.setState({ email: email });
    }

    handlePasswordChange = (password) => {
        this.setState({ password: password });
    }

    handleLogin = () =>{
        debugger;
        this.props.login({
            userName: 'test',
            password: 'test1234'
        })
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
                            onChangeText={this.handleEmailChange}
                        />
                        <LoginTextInput
                            labelText="Password"
                            labelTextSize={14}
                            inputType="password"
                            onChangeText={this.handlePasswordChange}
                        />
                        <Text style={styles.loginHeader}>{this.state.value}</Text>
                    </ScrollView>
                </View>
                <LoginButton handleLogin={this.handleLogin} />
                {
                    !this.props.user.loggedIn && <Text>Test Text</Text>
                }
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        flex: 1,
        backgroundColor: "#262626"
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);