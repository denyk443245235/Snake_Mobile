import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export class Ball {
constructor(){
    
}
}
export class BallComponent extends React.Component{
    render(){
        return(
            <View style={styles.ball}></View>
        )
    }
}
const styles = StyleSheet.create({
ball:{
    width:20,
    height:20,
    backgroundColor:'red'
}
});