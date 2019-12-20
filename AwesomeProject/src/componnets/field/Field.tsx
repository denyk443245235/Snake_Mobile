import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SnakeComponent } from '../snake/Snake';
import { Game } from '../../game';
export default class Field extends React.Component {
    game: Game;
    constructor(props) {
        super(props);
        this.game = new Game();
    }
    render() {
        return (
            <SnakeComponent game={this.game} />

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
