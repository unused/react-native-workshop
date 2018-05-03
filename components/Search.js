import React, { Component } from 'react'
import { TextInput, Button, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import styles from '../styles'
import List from './List'

/**
 * Search form.
 **/
class Search extends Component {

  static navigationOptions={ title: 'Search for a city' }

  /**
   * Use a constructor to show that props have to be sent to the parent in
   * first place, how to bind (the scope) of a handler function and set an
   * initial state.
   **/
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
    this.state = { city: 'Graz' };
  }

  /**
   * Handle form submission, set navigation target and parameters.
   **/
  submit() {
    this.props.navigation.navigate('Result', { city: this.state.city });
  }

  /**
   * Display input field and submit button.
   **/
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ city: text })}
          value={this.state.city}
        />

        <Button style={styles.colored} onPress={this.submit} title="Search" />
      </View>
    )
  }
}

/**
 * Export via StackNavigator to provide stacked view.
 **/
export default StackNavigator({
  Search : { screen: Search },
  Result: { screen: List }
})
