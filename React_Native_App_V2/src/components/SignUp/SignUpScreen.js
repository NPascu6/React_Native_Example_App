import React, { Component } from 'react';
import { View, Text } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { connect } from 'react-redux';
import AddUserComponent from '../Admin/admin_components/AddUserComponent';
import styles from '../../styles/SignUpStyles';
import { ConfirmationPopUp } from '../Shared_Components/ConfirmationPopUp';

class SignUpScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSignupComponent: true,
            userAdded: false,
            isModalVisible: false,
            error: ''
        }
    }

    componentDidMount() {
        this.setState({ isModalVisible: false })
        this.setState({ userAdded: false })
    }

    componentDidUpdate(previousProps) {
        debugger;
        if (this.props.isModalVisible === true && previousProps.error !== this.props.error) {
            this.setState({ isModalVisible: this.props.isModalVisible });
            this.setState({ error: this.props.error });
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
                <AddUserComponent isSignupComponent={this.state.isSignupComponent} navigation={this.props.navigation} userAdded={this.state.userAdded} />
                {this.state.isModalVisible ? <ConfirmationPopUp error={this.state.error} /> : null}
            </GestureRecognizer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addSuccess: state.adminReducers.addSuccess,
        error: state.adminReducers.error,
        isModalVisible: state.adminReducers.isModalVisible
    };
}

export default connect(mapStateToProps)(SignUpScreen);