import React from 'react'
import {View, Text} from 'react-native'
import moment from 'moment'

export default class Row extends React.Component{


    day(){
        let day = moment(this.props.day.dt * 1000).format('ddd');
        return (
            <Text>{day}</Text>
        )

    }

    date() {
        let day = moment(this.props.day.dt * 1000).format('DD/MM');
        return (
            <Text>{day}</Text>
        )
    }

    render() {
        return (
    <View>
        <Text>{this.day()} {this.date()}</Text>
        <Text>{this.props.day.temp.day}°C</Text>

    </View>
        )
    }
}