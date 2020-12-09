import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, Image, Alert } from 'react-native';
import { Router, Scene, Stack, Actions } from "react-native-router-flux";

const tab = [{ titre: "Exo1", action: Actions.exo1() }, { titre: "Exo2", action: Actions.exo2() }];

// const OurButtons =
//     tab.map((elem) => {
//         <Button
//             title={elem.titre}
//             onPress={() => { elem.action() }}
//         />
//     })

const OurButtons = () => {
    const tab = [{ titre: "Exo1", action: Actions.exo1() }, { titre: "Exo2", action: Actions.exo2() }];
    return (
        <>
            <Text> COUCOU</Text>
            {
                tab.map((elem) => {
                    <Button
                        title={elem.titre}
                        onPress={() => { elem.action() }}
                    />
                })
            }
        </>
    )
}

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }



    render() {
        return (
            <View style={styles.container}>
                <Text> Affichage En boucle</Text>
                {OurButtons }
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
