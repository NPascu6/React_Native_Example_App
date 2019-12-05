import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../actions/userActions';

//Components
import LogoutButton from '../Shared_Components/LogoutButton';

mapStateToProps = (state) => { return { userState: state.userReducers.userState } }
mapDispatchToProps = (dispatch) => { return bindActionCreators(ActionCreators, dispatch); }

const API_URL = 'http://192.168.122.104:4000';
const URL = `${API_URL}/users`;

class UserScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userState: {
                action: "",

            },
            users: []
        }
    }

    getUsers = () => {
        fetch(URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json())
            .then((responseJson) => {
                debugger;
                this.setState({ users: responseJson.recordset })
            })
            .catch((error) => {
                console.error(error);
            });

        debugger;
    }

    componentDidMount() {
        this.getUsers();
    }

    getAction1 = () => {
        debugger;
        this.props.userAction1();
        this.setState({ userState: this.props.userState });
    }
    getAction2 = () => {
        debugger;
        this.props.userAction2();
        this.setState({ userState: this.props.userState });
    }
    getAction3 = () => {
        debugger;
        this.props.userAction3();
        this.setState({ userState: this.props.userState });
    }

    render() {
        const users = this.state.users.map((item) => {
            return <View style={styles.view} key={item.userId}>
                <Text style={styles.text}>item={item.userId}</Text>
                <Text style={styles.text}>item={item.userName}</Text>
                <Text style={styles.text}>item={item.email}</Text>
                <Text style={styles.text}>item={item.FirstName}</Text>
                <Text style={styles.text}>item={item.LastName}</Text>
                <Text style={styles.text}>item={item.StartDate}</Text>
                <Text style={styles.text}>item={item.EndDate}</Text>
            </View >
        });

        return (
            <View>
                <LogoutButton navigation={this.props.navigation} />
                <Text>User Screen</Text>
                <Text onPress={this.getAction1}>Action 1:{this.state.userState.action}</Text>
                <Text onPress={this.getAction2}>Action 2:{this.state.userState.action}</Text>
                <Text onPress={this.getAction3}>Action 3:{this.state.userState.action}</Text>
                    <ScrollView style={styles.scrollView}>
                        {
                            users
                        }
                    </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 2,
    },
    scrollView: {
        backgroundColor: 'gray',
        marginHorizontal: 2,
    },
    text: {
        flex: 1, alignSelf: 'stretch'
    },
    view:{
        flex: 1, alignSelf: 'stretch', flexDirection: 'row'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);