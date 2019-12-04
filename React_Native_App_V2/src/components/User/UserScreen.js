import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../actions/userActions';

//Components
import LogoutButton from '../Shared_Components/LogoutButton';

mapStateToProps = (state) => { return { action: state.userReducers.action } }
mapDispatchToProps = (dispatch) => { return bindActionCreators(ActionCreators, dispatch); }

class UserScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            action: ""
        }
    }

    getAction1 = () => {
        debugger;
        this.props.userAction1();

        debugger;                                                                               
        this.setState({action: this.props.action});
    }

    render() {
        return (
            <View>
                <LogoutButton navigation={this.props.navigation} />
                <Text>User Screen</Text>
                <Text onPress={this.getAction1}>Press me  title={this.state.action}</Text>
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);