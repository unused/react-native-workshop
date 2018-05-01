import React from 'react'
import {TextInput, Button, View} from 'react-native'
import {StackNavigator} from 'react-navigation'
import List from './List'

class Search extends React.Component{

    static navigationOptions={
        title: 'Search a city'
    }




    constructor(props){
        super (props)
        this.state={
            city:'Graz'
        }
    }

    setCity (city){
        this.setState({city});
    }

    submit(){
        this.props.navigation.navigate('Result', {city: this.state.city })


    }

    render(){
        return (
            <View>
            <TextInput
                onChangeText={(text)=> this.setCity(text)}
                style={{height : 40, borderColor: 'gray', borderWidth:1, marginBottom: 20, paddingHorizontal: 10}}
                value={this.state.city}
            />


            <Button onPress={() => this.submit()} title="Search" />
            </View>
        )
    }
}

export default StackNavigator({

    Search : {
        screen : Search
    }
     ,
     Result: {
         screen : List
     }

})



// export default StackNavigator({
//
//     Search:{
//         screen : Search
//     },
//     Result :{
//         screen : Search
//     }
// })