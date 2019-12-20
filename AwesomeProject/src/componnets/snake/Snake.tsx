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
    @observable moveDirection: string;
    constructor(public game: Game) {
        this.blocks = [new Block('head', { x: 40, y: 10 }),new Block('body', { x: 20, y: 10 }), new Block('body', { x: 0, y: 10 })];
        this.moveDirection = "right"
    }

    @action changeWay(way: string) {
        this.moveDirection = way;
    }
    Move() {
        var previos = Object.assign({}, this.blocks[0].coordinate);
        var before;
        for (var i = 0; i < this.blocks.length; i++) {
            if (this.blocks[i].type == "head") {
                if (this.moveDirection == 'right') 
                this.blocks[i].coordinate.x += 20;
                if (this.moveDirection == 'down') 
                this.blocks[i].coordinate.y += 20;
                if (this.moveDirection == 'left') 
                this.blocks[i].coordinate.x -= 20;
                if (this.moveDirection == 'up') 
                this.blocks[i].coordinate.y -= 20;
            }
            else {
                before = Object.assign({}, this.blocks[i].coordinate);
                this.blocks[i].coordinate.x = previos.x;
                this.blocks[i].coordinate.y = previos.y;
                previos = Object.assign({}, before);
            }
        }
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
        this.blocks = this.snake.blocks;
        setInterval(() => {
            this.snake.Move();
            this.genericBlocks();
        }, 300)
    }
    genericBlocks = () => {
        this.blocksComponent = this.snake.blocks.map((item, index) => {
            return (
                <BlockComponent block={item} key={index} />
            )
        })
    }
    render() {
        return (
            <View>
                {this.blocksComponent}
            </View>
        )
    }
}