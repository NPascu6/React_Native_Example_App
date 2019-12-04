import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../actions/authentificationActions'

mapStateToProps = (state) => { return { user: state.authentificationReducers.user }; }
mapDispatchToProps = (dispatch) => { return bindActionCreators(ActionCreators, dispatch); }

class LogoutButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labe: 'Logout'
        }
    }

    logout = () => {
        this.props.logout();
        this.props.navigation.navigate("Login");
    }

    render() {
        return (
            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.textStyle} onPress={this.logout}>{this.state.labe}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        alignSelf: "flex-end",
        borderColor: "black",
        backgroundColor: "gray",
        borderWidth: 1,
        width: 90,
        margin: 2,
    },
    textStyle: {
        fontWeight: "bold",
        color: "white",
        padding: 2,
        textAlign: 'center',
        alignContent: 'center',
        fontSize: 16
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);;