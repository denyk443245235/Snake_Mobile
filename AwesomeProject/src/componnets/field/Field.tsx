import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SnakeComponent } from '../snake/Snake';
import { Game } from '../../game';
interface Props{
    game:Game;
}
export default class Field extends React.Component<Props>{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SnakeComponent game={this.props.game} />

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

        position: 'absolute',
        height: "100%",
        width: "100%"
    },
    block: {
        width: 10,
        height: 10,
        backgroundColor: "red"
    }
});
