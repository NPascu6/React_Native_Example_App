import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

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
        debugger;
        this.setState({
            userName: this.props.currentUser.userName,
            email: this.props.currentUser.email,
            FirstName: this.props.currentUser.FirstName,
            LastName: this.props.currentUser.LastName,
            StartDate: this.props.currentUser.StartDate,
        });
    }

    render() {
        debugger;

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

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#463d4a',
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        margin: 10,
        alignSelf: 'center', 
    },
    text: {
        fontWeight: "bold",
        color: "white",
        fontSize: 14,
        borderColor: 'white',
        padding: 1
    },
    textProfile: {
        fontWeight: "bold",
        color: "white",
        fontSize: 14,
        borderColor: 'white',
        padding: 1,
    },
    view: {
        alignSelf: 'center',
        width: 200,
        justifyContent: 'flex-end',
    },
    profileRow: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
});

export default CurrentUserProfile;