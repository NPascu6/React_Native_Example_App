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
            userId: '',
            userName: "",
            email: "",
            FirstName: "",
            LastName: "",
            StartDate: "",
            EndDate: "",
            RoleName: "2",
            password: "",
            isSignUp: false,
            isEdit: false
        }
    }

    componentDidMount() {
        this.props.isSignupComponent === true ? this.setState({ isSignUp: true }) : this.state.isSignUp = false;
    }

    handleAdd = () => {
        if (this.state.isSignUp) {
            this.props.signUp(this.state);
        }
        else {
            this.props.signUp(this.state);
            this.props.addUser(this.state);
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
                        <View>
                            <Text style={styles.loginHeader}>First Name</Text>
                            <TextInput style={styles.addInputStyle} onChangeText={value => this.setState({ FirstName: value })} />
                            <Text style={styles.loginHeader}>Role</Text>
                            <TextInput style={styles.addInputStyle} onChangeText={value => this.setState({ RoleName: value })} /></View>
                        : null
                    }
                    <Text style={styles.loginHeader}>User Name</Text>
                    <TextInput style={styles.addInputStyle} onChangeText={value => this.setState({ userName: value })} />
                    <Text style={styles.loginHeader}>Email</Text>
                    <TextInput style={styles.addInputStyle} onChangeText={value => this.setState({ email: value })} />
                    <Text style={styles.loginHeader}>Password</Text>
                    <TextInput style={styles.addInputStyle} onChangeText={value => this.setState({ password: value })} />
                    <Text style={styles.loginHeader}>LastName</Text>
                    <TextInput style={styles.addInputStyle} onChangeText={value => this.setState({ LastName: value })} />
                    <Text style={styles.loginHeader}>StartDate</Text>
                    <DatePickerComponent setDate={this.setStartDate} />
                    <Text style={styles.loginHeader}>EndDate</Text>
                    <DatePickerComponent setDate={this.setEndDate} />
                </ScrollView>
                <AddUserButton isSignUp={this.state.isSignUp} handleAdd={this.handleAdd}/>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.adminReducers.error,
        addSuccess: state.adminReducers.addSuccess
    };
}

const mapDispatchToProps = dispatch => ({
    signUp: (user) => dispatch(signUpAction(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUserComponent);