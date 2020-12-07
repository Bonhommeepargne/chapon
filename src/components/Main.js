import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, Image, Alert } from 'react-native';
import { Router, Scene, Stack, Actions } from "react-native-router-flux";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        console.log("render");
        return (
             <View style={styles.container}>
             <Text> Affichage En boucle</Text>
                <Button
                    title="Exo1"
                    onPress={() => {Actions.exo1() }}
                />
                <Button
                    title="Exo2"
                    onPress={() => { Actions.exo2() }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderColor: 'green'
    },
});

export default Main;
