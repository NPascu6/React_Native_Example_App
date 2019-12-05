import React, { Component } from 'react';
import { View, Text } from 'react-native';
//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../actions/authentificationActions'
//Components
import LogoutButton from '../Shared_Components/LogoutButton';
import CurrentUserProfile from '../User/CurrentUserProfile';

mapStateToProps = (state) => { return { user: state.authentificationReducers.user }; }
mapDispatchToProps = (dispatch) => { return bindActionCreators(ActionCreators, dispatch); }

class DetailsScreen extends Component {
    render() {
        return (
            <View>
                <LogoutButton  navigation={this.props.navigation}/>
                {
                    this.props.user.role === "Admin" ? 
                    <Text onPress={()=> this.props.navigation.navigate("Admin")}>Admin logged in</Text> :
                    <Text onPress={()=> this.props.navigation.navigate("User")}>User logged in</Text>
                }
                <CurrentUserProfile currentUser={this.props.user.currentUser} />
            </View>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);