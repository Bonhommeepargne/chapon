import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

class Icons extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        return (
            <View style={styles.containerIcons}>
                <Image
                    source={this.props.icons[0]}
                    style={styles.stretch}
                />
                <Image
                    source={this.props.icons[1]}
                    style={styles.stretch}
                />
                <Image
                    source={this.props.icons[2]}
                    style={styles.stretch}
                />
            </View>
        );
    }
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

export default Icons;