import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../../../styles/AdminStyles';

class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    edit = (user) => {
        this.props.enterEditMode(user);
    }

    delete = (userId) =>{
        this.props.delete(userId);
    }

    componentDidMount() {
        debugger;
        this.setState({ users: this.props.users })
    }

    componentDidUpdate(previouseProps) {
        if (previouseProps.users !== this.props.users) {
            this.setState({ users: this.props.users })
        }
    }

    render() {
        return (
            this.state.users.map((item) =>
                <View style={styles.view} key={item.userId}>
                    <Button title='Edit' onPress={() => this.edit(item)} />
                    <Text style={styles.text}>{item.userName}</Text>
                    <Text style={styles.text}>{item.email}</Text>
                    <Text style={styles.text}>{item.FirstName}</Text>
                    <Text style={styles.text}>{item.password}</Text>
                    <Text style={styles.text}>{item.LastName}</Text>
                    <Text style={styles.text}>{item.StartDate.toString().substr(0, 10)}</Text>
                    <Text style={styles.text}>{item.EndDate.toString().substr(0, 10)}</Text>
                    <Button title='Delete' onPress={() => this.delete(item)} />
                </View >
            ))
    }
}

export default UserList;