import React, { Component } from 'React'
import { Text, ActivityIndicator, FlatList } from 'react-native'
import WeatherRow from './weather/Row'
import styles from '../styles'
import qs from 'query-string'

/**
 * List representation of weather results. Fetches data from API on mount.
 **/
export default class List extends Component {

  static navigationOptions = (navigation) => ({ title: 'Forecast' })

  /**
   * Initial state is loading and has empty results.
   **/
  state = { loading: true, results: [] };

  /**
   * Shorthand to get city parameter from navigation state.
   **/
  get city() {
    return this.props.navigation.state.params.city;
  }

  /**
   * In lifecycle after render, fetch the data.
   **/
  componentDidMount() {
    this.fetchWeather();
  }

  /**
   * Fetch data from our api.
   **/
  fetchWeather() {
    const uri = '//localhost:5678';
    // const uri = 'http://[...].ngrok.io';
    const params = qs.stringify({ q: this.city });

    return fetch(`${uri}?${params}`)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, results: json.list }))
      .catch(() => this.setState({ error: true, loading: false }));
  }

  /**
   * Show results in a flat-list.
   *
   * Note: d(ay)t(ime) is used as key.
   **/
  render() {
    /**
     * Show loading indicator until results are present.
     **/
    if (this.state.loading){
      return <ActivityIndicator />;
    }
    if (this.state.error) {
      return <Text style={styles.error}>Could not fetch weather :(</Text>;
    }

    /**
     * Note: The item key helps react to decide when to apply updates and which
     * parts of the view to update. A string is expected, therefore we convert
     * the unix-timestamp given.
     **/
    return (
      <FlatList
        data={this.state.results}
        keyExtractor={item => String(item.dt)}
        renderItem={({ item }) => <WeatherRow {...item} />}
      />
    )
  }
}
