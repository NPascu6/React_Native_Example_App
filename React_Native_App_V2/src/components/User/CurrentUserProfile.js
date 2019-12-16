import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../../styles/UserStyles';

class CurrentUserProfile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            email: '',
            FirstName: '',
            LastName: '',
            StartDate: '',
        }
    }

    componentDidMount() {
        this.setState({
            userName: this.props.currentUser.userName,
            email: this.props.currentUser.email,
            FirstName: this.props.currentUser.FirstName,
            LastName: this.props.currentUser.LastName,
            StartDate: this.props.currentUser.StartDate,
        });
    }

    render() {
        return (
            <ScrollView style={styles.scrollView}>
                <View style={styles.view} key={this.state.userId}>
                    <View style={styles.profileRow}>
                        <Text style={styles.text}>
                            User Name:
                    </Text>
                        <Text style={styles.textProfile}>
                            {this.state.userName}
                        </Text>
                    </View>
                    <View style={styles.profileRow}>
                        <Text style={styles.text}>
                            Email:
                    </Text>
                        <Text style={styles.textProfile}>
                            {this.state.email}
                        </Text>
                    </View>
                    <View style={styles.profileRow}>
                        <Text style={styles.text}>
                            First Name:
                    </Text>
                        <Text style={styles.textProfile}>
                            {this.state.FirstName}
                        </Text>
                    </View>
                    <View style={styles.profileRow}>
                        <Text style={styles.text}>
                            Last Name:
                    </Text>
                        <Text style={styles.textProfile}>
                            {this.state.LastName}
                        </Text>
                    </View>
                    <View style={styles.profileRow}>
                        <Text style={styles.text}>
                            Start Date:
                    </Text>
                        <Text style={styles.textProfile}>
                            {this.state.StartDate ? this.state.StartDate.substr(0, this.state.StartDate.indexOf('T')) : null}
                        </Text>
                    </View>
                </View >
            </ScrollView>
        )
    }
}

export default CurrentUserProfile;