import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, Button } from 'react-native';
//Redux
import { connect } from 'react-redux';
import { editUserAction } from '../../../actions/adminActions';

import AddUserButton from '../admin_components/AddUserButton';
import DatePickerComponent from '../../Shared_Components/DatePicker';
import styles from '../../../styles/SignUpStyles';

class EditUserComponent extends Component {

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
            editableUser: {},
            isEdit: false
        }
    }

    setStartDate = (date) => {
        this.setState({ StartDate: date })
    }

    setEndDate = (date) => {
        this.setState({ EndDate: date })
    }

    componentDidMount() {
        this.setState({ editableUser: this.props.editableUser, isEdit: true })
    }

    handleEdit = (user) => {
        this.props.editUser(user)
    }

    render() {
        debugger;
        return (
            
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.loginHeader}>First Name</Text>
                    <TextInput style={styles.addInputStyle} onChangeText={value => this.setState({ FirstName: value })} value={this.state.editableUser.FirstName} />
                    <Text style={styles.loginHeader}>Role</Text>
                    <TextInput style={styles.addInputStyle} onChangeText={value => this.setState({ RoleName: value })} value={this.state.editableUser.RoleName} />
                    <Text style={styles.loginHeader}>User Name</Text>
                    <TextInput style={styles.addInputStyle} onChangeText={value => this.setState({ userName: value })} value={this.state.editableUser.userName} />
                    <Text style={styles.loginHeader}>Email</Text>
                    <TextInput style={styles.addInputStyle} onChangeText={value => this.setState({ email: value })} value={this.state.editableUser.email} />
                    <Text style={styles.loginHeader}>Password</Text>
                    <TextInput style={styles.addInputStyle} onChangeText={value => this.setState({ password: value })} value={this.state.editableUser.password} />
                    <Text style={styles.loginHeader}>LastName</Text>
                    <TextInput style={styles.addInputStyle} onChangeText={value => this.setState({ LastName: value })} value={this.state.editableUser.LastName} />
                    <Text style={styles.loginHeader}>StartDate</Text>
                    <DatePickerComponent setDate={this.setStartDate} valueFromProp={this.state.editableUser.StartDate} />
                    <Text style={styles.loginHeader}>EndDate</Text>
                    <DatePickerComponent setDate={this.setEndDate} valueFromProp={this.state.editableUser.EndDate} />
                </ScrollView>
                <AddUserButton isEditButton={this.state.isEdit} handleEdit={this.handleEdit} />
                <Button style={styles.buttonStyle} onPress={()=>{this.setState({isEdit: false})}} title="Cancel"></Button>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.adminReducers.error,
        editSuccess: state.adminReducers.editSuccess
    };
}

const mapDispatchToProps = dispatch => ({
    editUser: (user) => dispatch(editUserAction(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUserComponent);