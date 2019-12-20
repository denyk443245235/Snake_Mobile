import { Snake } from './componnets/snake/Snake';
import { Block } from './componnets/block/Block';
import {Buttons} from './componnets/buttons/Buttons';
export class Game {
    snake: Snake;
    buttons:Buttons
    constructor() {
        this.snake = new Snake(this);
        this.buttons = new Buttons(this);
    }
}