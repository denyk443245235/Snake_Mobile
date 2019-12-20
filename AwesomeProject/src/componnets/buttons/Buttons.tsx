import React from 'react';
import { Button, Image } from 'react-native-elements';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Game } from '../../game';
interface Props {
    game: Game;
}
export class Buttons {
    constructor(public game: Game) {

    }
    buttonClick = (way: string) => {
        this.game.snake.changeWay(way);
    }
}
export class ButtonsComponent extends React.Component<Props>{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.buttons}>
                <View style={[styles.btn]}>
                    <Button onPress={() => { this.props.game.buttons.buttonClick('up') }}
                        icon={
                            <Icon style={{ fontSize: 20 }}
                                name="arrow-up"
                                color="white"
                            />
                        }
                    />
                </View>
                <View style={styles.horizontal}>
                    <View style={styles.btn}>
                        <Button onPress={() => { this.props.game.buttons.buttonClick('left') }}
                            icon={
                                <Icon style={{ fontSize: 20 }}
                                    name="arrow-left"
                                    color="white"
                                />
                            }
                        />
                    </View>
                    <View style={[styles.btn]}>
                        <Button onPress={() => { this.props.game.buttons.buttonClick('right') }}
                            icon={
                                <Icon style={{ fontSize: 20 }}
                                    name="arrow-right"
                                    color="white"
                                />
                            }
                        />
                    </View>
                </View>
                <View style={[styles.btn]}>
                    <Button onPress={() => { this.props.game.buttons.buttonClick('down') }}
                        icon={
                            <Icon style={{ fontSize: 20 }}
                                name="arrow-down"
                                color="white"
                            />
                        }
                    />
                </View>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    btn: {
        width: "20%",
    },
    buttons: {
        width: "100%",
        height: "25%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    },
    horizontal: {
        display: "flex",
        flexDirection: "row",
        width: "80%",
        justifyContent: "space-around",
    }
});