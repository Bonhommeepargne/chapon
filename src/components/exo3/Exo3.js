import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, Image, Alert } from 'react-native';
import MyContext from '../../Context';
import { Actions } from "react-native-router-flux";
class Exo3 extends Component {

    constructor(props, context) {
        super(props,context);
        console.log(context.btnTitle)
    }

    static contextType = MyContext;

    render() {
        return (
            <View style={styles.container}>
                <Text>Le chiffre est:{this.context.compteur.value}</Text>
                <Button
                    title="Increment"
                    onPress={ () => { 
                        this.context.compteur.change(this.context.compteur.value + 1); // Bug ramene au main
                        // Actions.exo3();
                    }}
                />
                <Button
                    title="To Zero"
                    onPress={() => { this.context.compteur.change(0) }}
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
    }
});

export default Exo3;
