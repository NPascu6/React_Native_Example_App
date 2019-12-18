import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../../styles/SharedStyles';
import * as ActionCreators from '../../actions/authentificationActions';

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

mapStateToProps = (state) => { return { user: state.authentificationReducers.user }; }
mapDispatchToProps = (dispatch) => { return bindActionCreators(ActionCreators, dispatch); }

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);;