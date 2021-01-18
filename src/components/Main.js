import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, Image, Alert } from 'react-native';
import { Router, Scene, Stack, Actions } from "react-native-router-flux";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const OurButtons = (props) => {
    const navigation = props.navigation;
    let tableau = [{ titre: "Exo1", action: () => { navigation.navigate('Exo1') } },
    { titre: "Exo2", action: () => { navigation.navigate('Exo2') } },
    { titre: "Exo3", action: () => { navigation.navigate('Exo3') } }];
    return tableau.map((elem, i) => (
        <Button
            key={i}
            title={elem.titre}
            onPress={() => { elem.action() }}
        />
    ))
}

class Main extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {};
    }

    render() {
        const navigation = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text> Affichage En boucle </Text>
                <OurButtons navigation={navigation}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderColor: 'green'
    },
});

export default Main;
