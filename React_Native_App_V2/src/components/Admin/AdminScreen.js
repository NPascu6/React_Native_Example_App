import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
//Redux
import { connect } from 'react-redux';
import { getUsers } from '../../actions/adminActions';

//Components
import LogoutButton from '../Shared_Components/LogoutButton';
import AddUserComponent from '../Admin/admin_components/AddUserComponent';
import styles from '../../styles/AdminStyles';

class AdminScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addUser: false,
            users: [],
            userAdded: false
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
        const users = this.state.users.map((item) => {
            return <View style={styles.view} key={item.userId}>
                <Text style={styles.text}>{item.userName}</Text>
                <Text style={styles.text}>{item.email}</Text>
                <Text style={styles.text}>{item.FirstName}</Text>
                <Text style={styles.text}>{item.LastName}</Text>
                <Text style={styles.text}>{item.StartDate.toString().substr(0, 10)}</Text>
                <Text style={styles.text}>{item.EndDate.toString().substr(0, 10)}</Text>
            </View >
        });

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
                {!this.state.addUser &&
                    <ScrollView style={styles.scrollView}>{users}</ScrollView>}
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