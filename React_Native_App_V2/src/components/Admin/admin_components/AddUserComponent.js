import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
//Redux
import { connect } from 'react-redux';
import { signUpAction } from '../../../actions/adminActions';

import AddUserButton from '../admin_components/AddUserButton';
import DatePickerComponent from '../../Shared_Components/DatePicker';
import styles from '../../../styles/AdminStyles';

class AddUserComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            email: "",
            FirstName: "",
            LastName: "",
            StartDate: "",
            EndDate: "",
            Role: "1",
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

    handleAdd = () => {
        if (this.state.isSignUp) {
            this.props.signUp(this.state);
        }
        else {
            this.props.signUp(this.state);
        }
    }

    setStartDate = (date) => {
        this.setState({ StartDate: date })
    }

    setEndDate = (date) => {
        this.setState({ EndDate: date })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    {!this.state.isSignUp ?
                        <View style={styles.container}>
                            <Text style={styles.loginHeader}>First Name</Text>
                            <TextInput style={styles.addInputStyle} onChangeText={value => this.setState({ FirstName: value })} />
                            <Text style={styles.loginHeader}>Role</Text>
                            <TextInput style={styles.addInputStyle} onChangeText={value => this.setState({ Role: value })} /></View>
                        : null
                    }
                    <Text style={styles.loginHeader}>User Name</Text>
                    <TextInput style={styles.addInputStyle} onChangeText={value => this.setState({ userName: value })} />
                    <Text style={styles.loginHeader}>Email</Text>
                    <TextInput style={styles.addInputStyle} onChangeText={value => this.setState({ email: value })} />
                    <Text style={styles.loginHeader}>Password</Text>
                    <TextInput style={styles.addInputStyle} onChangeText={value => this.setState({ Password: value })} />
                    <Text style={styles.loginHeader}>LastName</Text>
                    <TextInput style={styles.addInputStyle} onChangeText={value => this.setState({ LastName: value })} />
                    <Text style={styles.loginHeader}>StartDate</Text>
                    <DatePickerComponent style={styles.addInputStyle} setDate={this.setStartDate} />
                    <Text style={styles.loginHeader}>EndDate</Text>
                    <DatePickerComponent style={styles.addInputStyle} setDate={this.setEndDate} />

                </ScrollView>
                <AddUserButton isSignUp={this.state.isSignUp} handleAdd={this.handleAdd} />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.adminReducers.users,
        addSuccess: state.adminReducers.addSuccess,
        error: state.adminReducers.error
    };
}

const mapDispatchToProps = dispatch => ({
    signUp: (user) => dispatch(signUpAction(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUserComponent);