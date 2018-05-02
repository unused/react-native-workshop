import React from 'react';
import { View, StatusBar } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons';

import About from './components/About'
import Search from './components/Search'


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

// <StatusBar hidden={true} /> Note: breaks Android Emulator(!)
export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Tabs />
      </View>
    );
  }
}

