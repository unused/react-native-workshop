import React from 'react'
import style from '../Style'
import {View, Text } from 'react-native'


export default class About extends React.Component {

    static navigationOptions ={
        title : 'About me'
    }

    render(){
        return (
            <View style={style.container}>
                <Text style={style.title}>About me</Text>
                <Text>

                    Lorem ipsum dolor sit
                </Text>





            </View>
        )
    }



}