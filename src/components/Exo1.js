import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, Image, Alert } from 'react-native';

class Exo1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            icons: [
                require('../../assets/starsgrey.png'),
                require('../../assets/starsgreyyellow.png'),
                require('../../assets/dashboard.png')
            ]
        }
    }

    changeIcon() {
        // let iconsTab =
        this.setState((Oldstate) => {
            return { icons: [Oldstate.icons[2], Oldstate.icons[1], Oldstate.icons[0]] }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerIcons}>
                    <Image
                        source={this.state.icons[0]}
                        style={styles.stretch}
                    />
                    <Image
                        source={this.state.icons[1]}
                        style={styles.stretch}
                    />
                    <Image
                        source={this.state.icons[2]}
                        style={styles.stretch}
                    />
                </View>
                <Button
                    title="Press me"
                    onPress={() => { this.changeIcon() }}
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
    containerIcons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '60%',
        height: '20%',
        borderWidth: 1,
        borderColor: 'blue'
    },
    stretch: {
        height: '50%',
        width: '20%',
        resizeMode: 'contain',
        borderWidth: 1,
        borderColor: 'blue'
    }
});

export default Exo1;
