import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../../actions/adminActions'

import AddUserButton from '../admin_components/AddUserButton';
import styles from '../../../styles/AdminStyles';

class AddUserComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                userId: "",
                userName: "",
                email: "",
                FirstName: "",
                LastName: "",
                StartDate: "",
                EndDate: "",
                Role: "",
                Password: ""
            },
            isSignUp: false,
        }
    }

    componentDidMount() {
        this.setState({
            users: this.props.userList
        });

        this.props.isSignupComponent === true ? this.setState({ isSignUp: true }) : this.state.isSignUp = false;
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.loginHeader}>User Name</Text>
                    <TextInput style={styles.addInputStyle} onChange={() => { this.setState({ userName }) }} />
                    <Text style={styles.loginHeader}>Email</Text>
                    <TextInput style={styles.addInputStyle} onChange={() => { this.setState({ email }) }} />
                    <Text style={styles.loginHeader}>Password</Text>
                    <TextInput style={styles.addInputStyle} onChange={() => { this.setState({ Password }) }} />
                    {!this.state.isSignUp ?
                        <View>
                            <Text style={styles.loginHeader}>First Name</Text>
                            <TextInput style={styles.addInputStyle} onChange={() => { this.setState({ FirstName }) }} />
                            <Text style={styles.loginHeader}>Role</Text>
                            <TextInput style={styles.addInputStyle} onChange={() => { this.setState({ Role }) }} /></View>
                        : null
                    }
                </ScrollView>
                <AddUserButton isSignUp={this.state.isSignUp} />
            </View>
        )
    }
}

mapStateToProps = (state) => {
    return {
        admin: state.adminReducers.userList.users
    };
}
mapDispatchToProps = (dispatch) => { return bindActionCreators(ActionCreators, dispatch); }

export default connect(mapStateToProps, mapDispatchToProps)(AddUserComponent);