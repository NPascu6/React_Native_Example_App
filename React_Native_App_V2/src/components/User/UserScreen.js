import React, { Component } from 'react';
import { View, Text } from 'react-native';
//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../actions/userActions';

//Components
import styles from '../../styles/UserStyles';
import LogoutButton from '../Shared_Components/LogoutButton';



const API_URL = 'http://192.168.0.213:4000';
const URL = `${API_URL}/users`;

class UserScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userState: {
                action: "",

            },
            currentUser: {}
        }
    }

    componentDidMount() {
        //this.getUsers();
        debugger;
        var currentUser = this.props.user.currentUser;
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
                <Text style={styles.buttonStyle} onPress={this.getAction1}>Action 1:{this.state.userState.action}</Text>
                <Text style={styles.buttonStyle} onPress={this.getAction2}>Action 2:{this.state.userState.action}</Text>
                <Text style={styles.buttonStyle} onPress={this.getAction3}>Action 3:{this.state.userState.action}</Text>
            </View>
        )
    }
}

mapStateToProps = (state) => { return { userState: state.userReducers.userState, user: state.authentificationReducers.user.currentUser } }
mapDispatchToProps = (dispatch) => { return bindActionCreators(ActionCreators, dispatch); }

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);