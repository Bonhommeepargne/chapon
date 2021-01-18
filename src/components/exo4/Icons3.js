import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

Icons3 = (props) => {

    return (
        <View style={styles.containerIcons} >
            <Image
                source={props.icons[0]}
                style={styles.stretch}
            />
            <Image
                source={props.icons[1]}
                style={styles.stretch}
            />
            <Image
                source={props.icons[2]}
                style={styles.stretch}
            />
        </View>
    );

}

const styles = StyleSheet.create(
    {
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

export default Icons3;