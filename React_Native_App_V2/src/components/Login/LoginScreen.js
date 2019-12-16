import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

//Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreators from '../../actions/authentificationActions';
import styles from '../../styles/LoginStyles';
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

    onSwipeLeft = () => {
        this.props.navigation.navigate('SignUp')
    }

    handleUserNameChange = (userName) => {
        this.setState({ userName: userName });
    }

    handlePasswordChange = (password) => {
        this.setState({ password: password });
    }

    componentDidMount() {
        this.setState({ currentUser: this.props.currentUser })
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
        this.setState({ currentUser: this.props.user.currentUser });
        this.setState({ errorMessage: this.props.user.errorMessage });
    }

    render() {
        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        };

        return (
            <GestureRecognizer
                onSwipeLeft={this.onSwipeLeft}
                config={config}
                style={{
                    flex: 1,
                    backgroundColor: this.state.backgroundColor
                }}
            >
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
            </GestureRecognizer>
        )
    }
}



mapStateToProps = (state) => { return { user: state.authentificationReducers.user }; }
mapDispatchToProps = (dispatch) => { return bindActionCreators(ActionCreators, dispatch); }

/*mapDispatchToProps = (dispatch) => { return {
    gotResultsForLogin: (result) => dispatch(getLoginResult(result))
}}*/

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);