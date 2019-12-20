import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { observer } from "mobx-react"
import { observable, action } from 'mobx';
import Field from './src/componnets/field/Field';
import {ButtonsComponent} from './src/componnets/buttons/Buttons';
import { Game } from './src/game';

export default class App extends React.Component {
  game:Game
  constructor(props) {
    super(props);
    this.game = new Game();

  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.field}>
          <Field game={this.game} />
        </View>
        <ButtonsComponent game={this.game} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  field: {
    flex: 1,
    backgroundColor: '#fff',
    height: "60%",
    width: "100%"
  },
  block: {
    width: 10,
    height: 10,
    backgroundColor: "red"
  },
});