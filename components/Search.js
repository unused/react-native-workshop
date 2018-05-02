import React from 'react'
import { TextInput, Button, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import style from '../Style'
import List from './List'

class Search extends React.Component{

  static navigationOptions={ title: 'Search for a city' }

  constructor(props) {
    super(props)

    this.submit = this.submit.bind(this);
    this.state = { city:'Graz' }
  }

  setCity(city) {
    this.setState({ city });
  }

  submit() {
    this.props.navigation.navigate('Result', { city: this.state.city })
  }

  render() {
    return (
      <View style={style.container}>
        <TextInput
          onChangeText={(text)=> this.setCity(text)}
          style={style.input}
          value={this.state.city}
        />

        <Button style={style.color} onPress={this.submit} title="Search" />
      </View>
    )
  }
}

export default StackNavigator({
  Search : { screen: Search },
  Result: { screen: List }
})
