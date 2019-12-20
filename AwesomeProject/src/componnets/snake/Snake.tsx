import React from 'react';
import { View, Text } from 'react-native';
import { Game } from '../../game';
import { Block } from '../block/Block';
import { BlockComponent } from '../block/Block';
import { observer } from "mobx-react"
import { observable, action } from 'mobx';
interface Props {
    game: Game;
}
export class Snake {
    blocks: Block[];
    moveDirection:string;
    constructor(public game: Game) {
        this.blocks = [new Block('head', { x: 20, y: 20 }), new Block('body', { x: 0, y: 20 })];
        this.moveDirection = "right"
    }
    startMove() {

    }
}
@observer
export class SnakeComponent extends React.Component<Props>{
    snake: Snake;
    @observable blocksComponent: JSX.Element[] = [];
    blocks: Block[];
    constructor(props: Props) {
        super(props);
        this.snake = this.props.game.snake;
        this.blocks = this.props.game.snake.blocks;
        setInterval(() => {
            var previos = Object.assign({}, this.blocks[0].coordinate);
            var before;
            for (var i = 0; i < this.blocks.length; i++) {
                if (this.blocks[i].type == "head") {
                    this.blocks[i].coordinate.x += 20;
                }
                else {
                    before = Object.assign({}, this.blocks[i].coordinate);
                    this.blocks[i].coordinate.x = previos.x;
                    this.blocks[i].coordinate.y = previos.y;
                    previos = Object.assign({}, before);
                }
            }
            this.blocksComponent = this.snake.blocks.map((item, index) => {
                return (
                    <BlockComponent block={item} key={index} />
                )
            })
        }, 1000)
    }
    render() {
        return (
            <View>
                {this.blocksComponent}
            </View>
        )
    }
}