import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../actions/authentificationActions'

mapStateToProps = (state) => { return { user: state.authentificationReducers.user }; }
mapDispatchToProps = (dispatch) => { return bindActionCreators(ActionCreators, dispatch); }

class DetailsScreen extends Component {
    constructor(props) {
        super(props);
        debugger;
    }

    logout = () => {
        debugger;
        this.props.logout();
        this.props.navigation.navigate("Login");
    }

    render() {
        return (
            <View>
                <Text>Details Screen
                    </Text>
                <Button onPress={this.logout} title="Log Out" />
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);