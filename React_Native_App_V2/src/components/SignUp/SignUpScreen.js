import React, { Component } from 'react';
import { View, Text } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { connect } from 'react-redux';
import AddUserComponent from '../Admin/admin_components/AddUserComponent';
import styles from '../../styles/SignUpStyles';

class SignUpScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSignupComponent: true
        }
    }


    onSwipeRight = () => {
        this.props.navigation.navigate('Login')
    }

    render() {
        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        };

        return (
            <GestureRecognizer
                onSwipeRight={this.onSwipeRight}
                config={config}
                style={{
                    flex: 1
                }}
            >
                <View>
                    <Text style={styles.loginHeader}>Sign Up screen</Text>
                </View>
                <AddUserComponent isSignupComponent={this.state.isSignupComponent} navigation={this.props.navigation} />
            </GestureRecognizer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addSuccess: state.adminReducers.addSuccess,
        error: state.adminReducers.error
    };
}

export default connect(mapStateToProps)(SignUpScreen);