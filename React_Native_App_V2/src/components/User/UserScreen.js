import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../actions/userActions';

//Components
import LogoutButton from '../Shared_Components/LogoutButton';

mapStateToProps = (state) => { return { userState: state.userReducers.userState } }
mapDispatchToProps = (dispatch) => { return bindActionCreators(ActionCreators, dispatch); }

class UserScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userState: {
                action:""
            }
        }
    }

    componentDidMount() {
        debugger;
        this.setState({ userState: this.props.userState });
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
        return (
            <View>
                <LogoutButton navigation={this.props.navigation} />
                <Text>User Screen</Text>
                <Text onPress={this.getAction1}>Action 1:{this.state.userState.action}</Text>
                <Text onPress={this.getAction2}>Action 2:{this.state.userState.action}</Text>
                <Text onPress={this.getAction3}>Action 3:{this.state.userState.action}</Text>
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);