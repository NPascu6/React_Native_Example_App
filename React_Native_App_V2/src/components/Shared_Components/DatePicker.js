import React, { Component } from 'react';
import { View, Platform, Text, InputAccessoryView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../../styles/DatepickerStyles';

export default class DatePickerComponent extends Component {
    state = {
        date: new Date(),
        mode: 'calendar',
        show: false
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

    componentDidUpdate(previousProps) {
        if (previousProps.valueFromProp !== this.props.valueFromProp) {
            this.setState({ date: this.props.valueFromProp })
        }
    }

    render() {
        const { show, date, mode } = this.state;
        return (
            <View>
                <View>
                    <Text style={styles.inputStyle} onPress={this.datepicker}>{this.state.date.toString().substr(0, 10)}</Text>
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