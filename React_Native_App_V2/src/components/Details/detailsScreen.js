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
                <LogoutButton logout={this.logout} />
                {
                    this.props.user.role === "Admin" ? 
                    <Text>Admin logged in</Text> :
                    <Text>User logged in</Text>
                }
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);