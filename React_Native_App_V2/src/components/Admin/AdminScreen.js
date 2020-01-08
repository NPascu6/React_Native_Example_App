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
            users: []
        }
    }

    addUser = () => {
        this.setState({ addUser: !this.state.addUser })
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
                <Text style={styles.text}>{item.StartDate ? item.StartDate.substr(0, item.StartDate.indexOf('T')) : null}</Text>
                <Text style={styles.text}>{item.StartDate ? item.EndDate.substr(0, item.EndDate.indexOf('T')) : null}</Text>
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
                            <View>
                                <Text style={styles.backButton}
                                    onPress={this.addUser}>Back To User List
                                    </Text>
                                <AddUserComponent userList={users} />
                            </View>
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