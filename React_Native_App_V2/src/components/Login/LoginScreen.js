import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';

//Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as ActionCreators from '../../actions/authentificationActions'
//Components
import LoginButton from './login_components/LoginButton';
import LoginTextInput from './login_components/LoginTextInput';

mapStateToProps = (state) => { return { user: state.authentificationReducers.user }; }
mapDispatchToProps = (dispatch) => { return bindActionCreators(ActionCreators, dispatch); }

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            title: "Login Component",
            errorMessage: ""
        }
    }

    componentDidMount(){
        debugger;
    }

    handleEmailChange = (email) => {
        this.setState({ email: email });
    }

    handlePasswordChange = (password) => {
        this.setState({ password: password });
    }

    handleLogin = () => {
        debugger;
        if (this.props.user.loggedIn === false) {
            this.props.login({
                userName: this.state.email,
                password: this.state.password
            });
        }
        this.props.user.loggedIn === true ? this.props.navigation.navigate('Details') : null;
        this.setState({ errorMessage: this.props.user.errorMessage });
    }

    render() {
        return (
            <View style={styles.wrapper}>
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
                </ScrollView>
                <Text style={styles.loginHeader}>{this.state.errorMessage}</Text>
                <LoginButton handleLogin={this.handleLogin} />
            </View >
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