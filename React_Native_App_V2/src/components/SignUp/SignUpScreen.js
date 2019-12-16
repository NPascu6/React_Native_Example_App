import React, { Component } from 'react';
import { View, Text } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

import AddUserComponent from '../Admin/admin_components/AddUserComponent';
import styles from '../../styles/SignUpStyles';

class SignUpScreen extends Component {

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
                <AddUserComponent isSignupComponent={true} />
            </GestureRecognizer>
        )
    }
}

export default SignUpScreen;