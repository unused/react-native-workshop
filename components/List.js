import React from 'React'
import { Text, ActivityIndicator, ListView } from 'react-native'
import WeatherRow from './weather/Row'

export default class List extends React.Component {

  static navigationOptions = (navigation) => ({ title: 'Forecast' })

  constructor(props) {
    super(props)

    this.state = {
      city: this.props.navigation.state.params.city,
      report : null
    }
    this.fetchWeather()
  }

  fetchWeather() {
    fetch.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&mode=json&units=Metric&cnt=10&APPID=94c6cf0868fa5cb930a5e2d71baf0dbf')
      .then(response => response.json())
      .then(json => this.setState({ report: json.data }))
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
        dataSource = {ds.cloneWithRows(this.state.report.list)}
        renderRow={(rowData, j, k) => (
          <WeatherRow day={rowData} index={parseInt(k, 10)}/>
        )}
      />
    )
  }
}
