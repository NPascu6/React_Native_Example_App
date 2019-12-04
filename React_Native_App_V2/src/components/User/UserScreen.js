import React, { Component } from 'react';
import { View, Text } from 'react-native';
//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../actions/authentificationActions'
//Components
import LogoutButton from '../Shared_Components/LogoutButton';

mapStateToProps = (state) => { return { user: state.authentificationReducers.user }; }
mapDispatchToProps = (dispatch) => { return bindActionCreators(ActionCreators, dispatch); }

class UserScreen extends Component {
    render() {
        return (
            <View>
                <LogoutButton navigation={this.props.navigation}/>
                <Text>User Screen</Text>
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);