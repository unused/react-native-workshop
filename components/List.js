import React from 'React'
import { Text, ActivityIndicator, ListView } from 'react-native'
import WeatherRow from './weather/Row'
import qs from 'query-string'

export default class List extends React.Component {

  static navigationOptions = (navigation) => ({ title: 'Forecast' })

  constructor(props) {
    super(props)

    this.state = {
      city: this.props.navigation.state.params.city,
      report : null
    };

    this.fetchWeather();
  }

  fetchWeather() {
    const uri = 'http://api.openweathermap.org/data/2.5/forecast/daily';
    const params = qs.stringify({
      q: this.state.city,
      mode: 'json',
      units: 'Metric',
      cnt: 10,
      APPID: '94c6cf0868fa5cb930a5e2d71baf0dbf', // 🙈 - please don't do this!
    });

    return fetch(`${uri}?${params}`)
      .then(response => response.json())
      .then(json => this.setState({ report: json }));
  }

  render() {
    if(this.state.report === null){
      return <ActivityIndicator/>;
    }

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => (r1 !== r2)
    });
    return (
      <ListView
        dataSource={ds.cloneWithRows(this.state.report.list)}
        renderRow={(rowData, j, k) => (
          <WeatherRow day={rowData} index={parseInt(k, 10)}/>
        )}
      />
    )
  }
}
