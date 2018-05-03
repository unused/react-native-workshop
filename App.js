import React, { Component } from 'react';
import { Platform, View, StatusBar } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import About from './components/About'
import Search from './components/Search'


/**
 * Configure the react navigation tab navigation component.
 **/
const Tabs = TabNavigator({
    Search: {screen: Search},
    About: {screen: About}
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Search') {
          iconName = `ios-search${focused ? '' : '-outline'}`;
        } else if (routeName === 'About') {
          iconName = `ios-information${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }
  }
);

/**
 * Main application entry point. TabNavigator will render active view.
 *
 * <StatusBar hidden={true} /> Note: breaks Android Emulator(!)
 **/
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {Platform.os === 'android' && <StatusBar hidden />}
        <Tabs />
      </View>
    );
  }
}

