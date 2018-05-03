import React, { Component } from 'react'
import { Platform, View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from '../../styles'
import moment from 'moment'

/**
 * Weather Row entry.
 *
 * Note: Use Platform to demonstrate how to use conditions by choosing either
 * ios or material design icons.
 **/
export default class Row extends Component {
  icon () {
    const type = this.props.weather[0].main.toLocaleLowerCase();
    const iconName = {
      clouds: 'cloudy',
      clear: 'sunny',
      rain: 'rainy',
    }[type] || 'default';
    const iconPrefix = Platform.os === 'ios' ? 'ios' : 'md';
    return <Ionicons name={`${iconPrefix}-${iconName}`} size={25} />;
  }

  render() {
    return (
      <View style={styles.row}>
        <Text>{moment(this.props.dt * 1000).fromNow()}</Text>
        {this.icon()}
        <Text style={styles.temp}>{this.props.temp.day}°C</Text>
      </View>
    )
  }
}
