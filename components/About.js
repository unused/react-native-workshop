import React from 'react'
import style from '../Style'
import { View, Text } from 'react-native'


export default class About extends React.Component {

  static navigationOptions = { title : 'About me' }

  render() {
    return (
      <View style={style.container}>
        <Text style={style.title}>About me</Text>
        <Text>This is a demo application, showing you some weather info.</Text>
      </View>
    )
  }
}
