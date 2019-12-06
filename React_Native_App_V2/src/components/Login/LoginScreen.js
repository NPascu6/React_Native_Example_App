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

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            title: "Norbi's Demo app",
            errorMessage: "",
            currentUser: {}
        }
    }

    handleUserNameChange = (userName) => {
        this.setState({ userName: userName });
    }

    handlePasswordChange = (password) => {
        this.setState({ password: password });
    }

    componentDidMount(){
        this.setState({currentUser: this.props.currentUser})
    }

    handleLogin = () => {
        debugger;
        if (this.props.user.loggedIn === false) {
            this.props.login({
                userName: this.state.userName,
                password: this.state.password
            });
        }
        this.props.user.loggedIn === true ? this.props.navigation.navigate('Details') : null;
        debugger;
        this.setState({currentUser: this.props.user.currentUser});
        this.setState({ errorMessage: this.props.user.errorMessage });
    }

    /*handleLogin = () => {
        const {gotResultsForLogin} = this.props;
        try {
            const response = await fetch(URL,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        data: userCredentials
                    })
                });

            const result = await response.json();
            // dispatch(getLoginResult(result));
            gotResultsForLogin(result);
        }
        catch (err) {
            console.log(err);
            return {
                type: LOGIN_ERROR,
                payload: error
            }
        }
    }*/

    render() {
        return (
            <View style={styles.wrapper}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.loginHeader}>{this.state.title}</Text>
                    <LoginTextInput
                        labelText="User Name"
                        labelTextSize={14}
                        inputType="text"
                        onChangeText={this.handleUserNameChange}
                    />
                    <LoginTextInput
                        labelText="Password"
                        labelTextSize={14}
                        inputType="password"
                        onChangeText={this.handlePasswordChange}
                    />
                </ScrollView>
                <Text>{this.state.errorMessage}</Text>
                <LoginButton handleLogin={this.handleLogin} />
            </View >
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#262626",
    },
    loginHeader: {
        fontSize: 20,
        color: "white",
        fontWeight: "300",
        marginBottom: 0,
        textAlign: 'center',
        marginBottom:50,
        backgroundColor:'#463d4a',
        fontWeight:'bold',
        fontFamily: ''
    }
});

mapStateToProps = (state) => { return { user: state.authentificationReducers.user }; }
mapDispatchToProps = (dispatch) => { return bindActionCreators(ActionCreators, dispatch); }

/*mapDispatchToProps = (dispatch) => { return {
    gotResultsForLogin: (result) => dispatch(getLoginResult(result))
}}*/

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);