import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

class CurrentUserProfile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userId: '',
            userName: '',
            email: '',
            FirstName: '',
            LastName: '',
            StartDate: '',
            EndDate: ''
        }
    }

    componentDidMount() {
        debugger;
        this.setState({
            userId: this.props.currentUser.userId,
            userName: this.props.currentUser.userName,
            email: this.props.currentUser.email,
            FirstName: this.props.currentUser.FirstName,
            LastName: this.props.currentUser.LastName,
            StartDate: this.props.currentUser.StartDate,
            EndDate: this.props.currentUser.EndDate
        });
    }

    render() {
        debugger;

        return (<ScrollView style={styles.scrollView}><View style={styles.view} key={this.state.userId}>
            <Text style={styles.text}>{this.state.userId}</Text>
            <Text style={styles.text}>{this.state.userName}</Text>
            <Text style={styles.text}>{this.state.email}</Text>
            <Text style={styles.text}>{this.state.FirstName}</Text>
            <Text style={styles.text}>{this.state.LastName}</Text>
            <Text style={styles.text}>{this.state.StartDate}</Text>
            <Text style={styles.text}>{this.state.EndDate}</Text>
        </View ></ScrollView>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 2,
    },
    scrollView: {
        backgroundColor: 'gray',
        marginHorizontal: 2,
        marginVertical: 2
    },
    text: {
        fontWeight: "bold",
        color: "white",
        textAlign: 'center',
        alignContent: 'center',
        fontSize: 14,
        borderWidth: 0.5,
        borderColor: 'white',
        width: 58,
        padding: 1
    },
    view: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
    }
});

export default CurrentUserProfile;