import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Icons from './Icons';
import ButtonMsx from './ButtonMsx';

class Exo2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            icons: [
                require('../../../assets/starsgrey.png'),
                require('../../../assets/dashboard.png'),
                require('../../../assets/starsgreyyellow.png'),
            ],
            compteur: 1
        }
    }

    changeIcon = () => {
        // console.log("Notre state : ", this.state);
        // let iconsTab =
        this.setState((Oldstate) => {
            return { icons: [Oldstate.icons[2], Oldstate.icons[1], Oldstate.icons[0]] }
        });
    }

    render() {
        // console.log("render");
        return (
            <View style={styles.container}>
                <Icons icons={ this.state.icons } />
                <ButtonMsx handler={this.changeIcon} />
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

export default Exo2;

