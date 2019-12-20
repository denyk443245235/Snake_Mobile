import React from 'react';
import { Button, Image } from 'react-native-elements';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Buttons extends React.Component {
    render() {
        return (
            <View style={styles.buttons}>
                <View style={[styles.btn]}>
                    <Button
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
                        <Button
                            icon={
                                <Icon style={{ fontSize: 20 }}
                                    name="arrow-left"
                                    color="white"
                                />
                            }
                        />
                    </View>
                    <View style={[styles.btn]}>
                        <Button
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
                    <Button 
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
        justifyContent:"space-around",
        alignItems:"center"
    },
    horizontal: {
        display: "flex",
        flexDirection: "row",
        width:"80%",
        justifyContent:"space-around",
    }
});