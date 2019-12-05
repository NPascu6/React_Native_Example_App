import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../actions/authentificationActions'
//Components
import LogoutButton from '../Shared_Components/LogoutButton';

import { users as userList } from '../Login/login_components/userList.json';


mapStateToProps = (state) => { return { user: state.authentificationReducers.user }; }
mapDispatchToProps = (dispatch) => { return bindActionCreators(ActionCreators, dispatch); }

class AdminScreen extends Component {
    render() {
        const users = userList.map((item) => {
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
                <ScrollView style={styles.scrollView}>{users}</ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminScreen);