import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
                    <Text style={styles.buttonStyle} onPress={()=> this.props.navigation.navigate("Admin")}>Go To Users List</Text> :
                    <Text style={styles.buttonStyle} onPress={()=> this.props.navigation.navigate("User")}>Open First Actions</Text>
                }
                <CurrentUserProfile currentUser={this.props.user.currentUser} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: "gray",
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 15,
        margin: 2,
        fontWeight: "bold",
        color: "white",
        padding: 2,
        textAlign: 'center',
        alignContent: 'center',
        fontSize: 16
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);