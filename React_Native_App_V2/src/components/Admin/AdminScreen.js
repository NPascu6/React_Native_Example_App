import React, { Component } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
//Redux
import { connect } from 'react-redux';
import { getUsers } from '../../actions/adminActions';

//Components
import LogoutButton from '../Shared_Components/LogoutButton';
import AddUserComponent from '../Admin/admin_components/AddUserComponent';
import styles from '../../styles/AdminStyles';
import EditUserComponent from './admin_components/EditUserComponent';
import UserList from './admin_components/UserList';

class AdminScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addUser: false,
            users: [],
            userAdded: false,
            isEditMode: false,
            editableUser: {}
        }
    }

    addUser = (user) => {
        this.setState({ addUser: !this.state.addUser });
        if (user.userName) {
            let exists = this.state.users.filter(userInList => userInList.userName == user.userName)
            if (exists.length === 0) {
                this.state.users.push(user)
            }
        }
    }

    enterEditMode = (user) => {
        this.setState({isEditMode: true, editableUser: user});
    }

    handleAdd = () => {
        this.setState({ userAdded: true })
    }

    componentDidMount() {
        this.props.getUsers();
        this.setState({ users: this.props.users })
    }

    componentDidUpdate(previouseProps) {
        if (previouseProps.users !== this.props.users) {
            this.setState({ users: this.props.users })
        }
    }

    render() {
        return (
            <View>
                <LogoutButton navigation={this.props.navigation} />
                <View>
                    {
                        !this.state.addUser ?
                            <Text style={styles.backButton}
                                onPress={this.addUser}>Add User
                         </Text>
                            :
                            <ScrollView>
                                <Text style={styles.backButton}
                                    onPress={this.addUser}>Back To User List
                                    </Text>
                                <AddUserComponent
                                    userList={this.state.users}
                                    addUser={this.addUser}
                                    handleAdd={this.handleAdd}
                                    userAdded={this.state.userAdded} />
                            </ScrollView>
                    }
                </View>
                {!this.state.addUser && !this.state.isEditMode ?
                    <ScrollView style={styles.scrollView}><UserList users={this.state.users} enterEditMode={this.enterEditMode} /></ScrollView> : null}
                {
                    this.state.isEditMode && <EditUserComponent editableUser={this.state.editableUser}/>
                }
            </View>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        users: state.adminReducers.users
    };
}
const mapDispatchToProps = dispatch => ({
    getUsers: () => dispatch(getUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminScreen);