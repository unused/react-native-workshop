import React, { Component } from 'react'
import styles from '../styles'
import { View, Text } from 'react-native'


export default class About extends Component {

  static navigationOptions = { title : 'About me' }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>About me</Text>
        <Text>This is a demo application, showing you some weather info.</Text>
      </View>
    )
  }
}
