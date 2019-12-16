import React, { Component } from 'react';
import { View, Text } from 'react-native';
//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../actions/authentificationActions';
//Components
import styles from '../../styles/DetailsStyles';
import LogoutButton from '../Shared_Components/LogoutButton';
import CurrentUserProfile from '../User/CurrentUserProfile';



class DetailsScreen extends Component {
    render() {
        return (
            <View>
                <LogoutButton  navigation={this.props.navigation}/>
                {
                    this.props.user.role === "Admin" ? 
                    <Text style={styles.buttonStyle} onPress={()=> this.props.navigation.navigate("Admin")}>Go To Users List</Text> :
                    <Text style={styles.buttonStyle} onPress={()=> this.props.navigation.navigate("User")}>Open First Actions</Text>
                }
                <CurrentUserProfile currentUser={this.props.user.currentUser} />
            </View>
        )
    }
}

mapStateToProps = (state) => { return { user: state.authentificationReducers.user }; }
mapDispatchToProps = (dispatch) => { return bindActionCreators(ActionCreators, dispatch); }

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);