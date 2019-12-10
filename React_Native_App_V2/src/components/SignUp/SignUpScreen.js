import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

import AddUserComponent from '../Admin/admin_components/AddUserComponent';

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

const styles = StyleSheet.create({
    loginHeader: {
        fontSize: 20,
        color: "white",
        fontWeight: "300",
        marginBottom: 0,
        textAlign: 'center',
        marginBottom: 50,
        backgroundColor: '#463d4a',
        fontWeight: 'bold',
        fontFamily: ''
    }
});

export default SignUpScreen;