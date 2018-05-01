import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import moment from 'moment'

export default class Row extends React.Component{


    day(){
        let day = moment(this.props.day.dt * 1000).format('ddd');
        return (
            <Text>{day}</Text>
        )

    }

    date() {
        let day = moment(this.props.day.dt * 1000).format('DD/MM');
        return (
            <Text>{day}</Text>
        )
    }

    icon () {
        const type = this.props.day.weather[0].main.toLocaleLowerCase();
        return (
            <Text>{type}</Text>
        )
    }

    render() {
        return (
    <View style={style.view}>
        <Text>{this.day()} {this.date()}</Text>
        {this.icon()}
        <Text style={style.temp}>{this.props.day.temp.day}°C</Text>

    </View>
        )
    }
}

const style = StyleSheet.create({
view : {
    borderWidth:0,
    borderBottomWidth:1,
    borderBottomColor : '#202340',
    paddingHorizontal:20,
    paddingVertical:10,
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between'
},
    temp:{
        color:"#F00",
        fontWeight : 'bold',
        fontSize : 22
    }


})