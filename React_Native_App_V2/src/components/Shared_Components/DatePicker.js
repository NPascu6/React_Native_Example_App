import React, { Component } from 'react';
import { View, Platform, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class DatePickerComponent extends Component {
    state = {
        date: new Date(),
        mode: 'date',
        show: false,
    }

    setDate = (event, date) => {
        date = date || this.state.date;

        this.setState({
            show: Platform.OS === 'ios' ? true : false,
            date,
        });

        this.props.setDate(date);
    }

    show = mode => {
        this.setState({
            show: true,
            mode,
        });
    }

    datepicker = () => {
        this.show('date');
    }

    timepicker = () => {
        this.show('time');
    }

    render() {
        const { show, date, mode } = this.state;
        debugger;
        return (
            <View>
                <View>
                    <Text onPress={this.datepicker}>{this.state.date.toDateString()}</Text>
                </View>
                {show && <DateTimePicker value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={this.setDate} />
                }
            </View>
        );
    }
}