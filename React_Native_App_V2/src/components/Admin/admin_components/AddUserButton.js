import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../../styles/SharedStyles';

class AddUserButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labelAdd: "Add User",
            labelSignUp: "Sign UP",
            labelEdit: "Save"
        }
    }

    render() {
        return (
            <TouchableOpacity style={styles.buttonStyle}>
                {
                    !this.props.isSignUp ?
                        (
                            !this.props.isEditButton ?
                                <Text onPress={this.props.handleAdd} style={styles.textStyle}>{this.state.labelAdd}</Text>
                                :
                                <Text onPress={this.props.handleEdit} style={styles.textStyle}>{this.state.labelEdit}</Text>
                        )
                        :
                        <Text onPress={this.props.handleAdd} style={styles.textStyle}>{this.state.labelSignUp}</Text>
                }
            </TouchableOpacity>
        )
    }
}




export default AddUserButton;