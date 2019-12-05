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
                <Text style={styles.text}>{item.userId}</Text>
                <Text style={styles.text}>{item.userName}</Text>
                <Text style={styles.text}>{item.email}</Text>
                <Text style={styles.text}>{item.FirstName}</Text>
                <Text style={styles.text}>{item.LastName}</Text>
                <Text style={styles.text}>{item.StartDate}</Text>
                <Text style={styles.text}>{item.EndDate}</Text>
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
                    <View style={styles.view}>
                        <Text style={styles.text}>user ID</Text>
                        <Text style={styles.text}>User Name</Text>
                        <Text style={styles.text}>First Name</Text>
                        <Text style={styles.text}>Last Name</Text>
                        <Text style={styles.text}>Email</Text>
                        <Text style={styles.text}>Start Date</Text>
                        <Text style={styles.text}>End Date</Text>
                    </View >
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
        marginVertical: 2
    },
    text: {
        fontWeight: "bold",
        color: "white",
        textAlign: 'center',
        alignContent: 'center',
        fontSize: 14,
        borderWidth: 0.5,
        borderColor: 'white',
        width: 58,
        padding: 1
    },
    view: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);