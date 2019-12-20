import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
interface Props {
    block: Block
}
export class Block {
    coordinate: { x: number, y: number };
    type: string;
    constructor(type, coordinate) {
        this.coordinate = coordinate;
        this.type = type;
    }
}

export class BlockComponent extends React.Component<Props> {
    coordinate: { x: number, y: number } = { x: 0, y: 0 };
    constructor(props) {
        super(props);
        this.coordinate = this.props.block.coordinate;
    }
    render() {
        return (
            <View style={[styles.container, { left: this.coordinate.x }, { top: this.coordinate.y }]} ></View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        width: 20,
        height: 20,
        backgroundColor: "green"
    },

});
