import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icons2 from './Icons2';
import Icons3 from './Icons3';
import ButtonMsx2 from './ButtonMsx2';
import ButtonMsx3 from './ButtonMsx3';

const Exo4 = () => {

    const [icons, setIcons] = useState([
        require('../../../assets/starsgrey.png'),
        require('../../../assets/dashboard.png'),
        require('../../../assets/starsgreyyellow.png'),
    ]);

    changeIcon = () => {

        setIcons([icons[2], icons[1], icons[0]]);
    }

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text>Made with Class component:</Text>
                <Icons2 icons={icons} />
                <ButtonMsx2 handler={() => (changeIcon())} />
            </ View>
            <View style={styles.container}>
                <Text>Made with functionnal component:</Text>
                <Icons3 icons={icons} />
                <ButtonMsx3 handler={() => (changeIcon())} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderWidth: 1,
        borderColor: 'green'
    }
});

export default Exo4;

