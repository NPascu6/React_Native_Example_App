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
                <ScrollView style={styles.scrollView}>{users}</ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
        marginHorizontal: 2,
        marginVertical: 2
    },
    text: {
        fontWeight: "bold",
        color: "white",
        fontSize: 12,
        padding: 3,
        
    },
    view: {
        flex: 1,
        justifyContent:'space-evenly',
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 15,
        padding: 10,
        backgroundColor: 'gray'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminScreen);