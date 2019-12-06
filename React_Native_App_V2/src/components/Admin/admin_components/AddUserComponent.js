import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../../actions/adminActions'

import AddUserButton from '../admin_components/AddUserButton'

mapStateToProps = (state) => { return { admin: state.adminReducers.userList.users }; }
mapDispatchToProps = (dispatch) => { return bindActionCreators(ActionCreators, dispatch); }

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
            }
        }
    }

    componentDidMount() {
        debugger;
        this.setState({
            users: this.props.userList
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.loginHeader}>User Name</Text>
                    <TextInput style={styles.addInputStyle} onChange={() => { this.setState({ userName }) }} />
                    <Text style={styles.loginHeader}>Email</Text>
                    <TextInput style={styles.addInputStyle} onChange={() => { this.setState({ email }) }} />
                    <Text style={styles.loginHeader}>First Name</Text>
                    <TextInput style={styles.addInputStyle} onChange={() => { this.setState({ FirstName }) }} />
                    <Text style={styles.loginHeader}>Password</Text>
                    <TextInput style={styles.addInputStyle} onChange={() => { this.setState({ Password }) }} />
                    <Text style={styles.loginHeader}>Role</Text>
                    <TextInput style={styles.addInputStyle} onChange={() => { this.setState({ Role }) }} />
                </ScrollView>
                <AddUserButton />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#262626"
    },
    loginHeader: {
        fontSize: 16,
        color: "white",
        fontWeight: "300",
        marginBottom: 0,
        textAlign: 'center',
        backgroundColor: '#463d4a',
        fontWeight: 'bold',
    },
    addInputStyle: {
        borderBottomWidth: 1,
        borderColor: 'white',
        padding: 0
    },
    container: {
        height: 270
    },
    scrollView: {
        backgroundColor: '#463d4a',
        marginHorizontal: 30,
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUserComponent);