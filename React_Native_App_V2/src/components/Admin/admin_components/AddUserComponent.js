import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
//Redux
import { connect } from 'react-redux'

import AddUserButton from '../admin_components/AddUserButton';
import styles from '../../../styles/AdminStyles';

class AddUserComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userId: "",
            userName: "",
            email: "",
            FirstName: "",
            LastName: "",
            StartDate: "",
            EndDate: "",
            Role: "",
            Password: "",
            isSignUp: false,
        }
    }

    componentDidMount() {
        this.setState({
            users: this.props.users
        });

        this.props.isSignupComponent === true ? this.setState({ isSignUp: true }) : this.state.isSignUp = false;
    }

    setFirstName = (action) => {
        debugger;
        this.setState({ FirstName: action.nativeEvent.text })
    }

    setEmail = (action) => {
        debugger;
        this.setState({ email: action.nativeEvent.text })
    }

    setLastName = (action) => {
        debugger;
        this.setState({ LastName: action.nativeEvent.text })
    }

    setUserName = (action) => {
        debugger;
        this.setState({ userName: action.nativeEvent.text })
    }

    setPassword = (action) => {
        debugger;
        this.setState({ Password: action.nativeEvent.text })
    }

    setStartDate = (action) => {
        debugger;
        this.setState({ StartDate: action.nativeEvent.text })
    }

    setEndDate = (action) => {
        debugger;
        this.setState({ EndDate: action.nativeEvent.text })
    }

    setRole = (action) => {
        debugger;
        this.setState({ Role: action.nativeEvent.text })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.loginHeader}>User Name</Text>
                    <TextInput style={styles.addInputStyle} onChange={value => this.setFirstName(value)} />
                    <Text style={styles.loginHeader}>Email</Text>
                    <TextInput style={styles.addInputStyle} onChange={() => { this.setEmail }} />
                    <Text style={styles.loginHeader}>Password</Text>
                    <TextInput style={styles.addInputStyle} onChange={() => { this.setPassword }} />
                    <Text style={styles.loginHeader}>LastName</Text>
                    <TextInput style={styles.addInputStyle} onChange={() => { this.setLastName }} />
                    <Text style={styles.loginHeader}>StartDate</Text>
                    <TextInput style={styles.addInputStyle} onChange={() => { this.setStartDate }} />
                    <Text style={styles.loginHeader}>EndDate</Text>
                    <TextInput style={styles.addInputStyle} onChange={() => { this.setEndDate }} />
                    {!this.state.isSignUp ?
                        <View>
                            <Text style={styles.loginHeader}>First Name</Text>
                            <TextInput style={styles.addInputStyle} onChange={() => { this.setFirstName }} />
                            <Text style={styles.loginHeader}>Role</Text>
                            <TextInput style={styles.addInputStyle} onChange={() => { this.setRole }} /></View>
                        : null
                    }
                </ScrollView>
                <AddUserButton isSignUp={this.state.isSignUp} user={this.state.user} />
            </View>
        )
    }
}

mapStateToProps = (state) => {
    return {
        users: state.adminReducers.users
    };
}

export default connect(mapStateToProps)(AddUserComponent);