import React from 'react';
import {View, StatusBar} from 'react-native'
import About from './components/About'
import Search from './components/search'
import {TabNavigator} from 'react-navigation'


const Tabs = TabNavigator({
    Search : {screen: Search},
    About: {screen: About}
})

export default class App extends React.Component {
  render() {
    return (
        <View style={{flex : 1}}>
            <StatusBar hidden={true}/>
            <Tabs/>
        </View>
    );
  }
}

