import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert } from 'react-native';

export class ConfirmationPopUp extends Component {
    state = {
        modalVisible: false,
        error: ''
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    componentDidMount() {
        this.setState({modalVisible: true})
        this.setState({ error: this.props.error })
    }

    componentDidUpdate(previouseProps) {
        if (previouseProps.error !== this.props.error || this.props.error === '') {
            this.setModalVisible(true);
            this.setState({ error: this.props.error })
        }
    }

    render() {
        return (
            <View style={{ marginTop: 22 }}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <Text>{this.state.error}></Text>
                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text>Ok</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}