import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, Image, Alert } from 'react-native';
import { Router, Scene, Stack, Actions } from 'react-native-router-flux';
import MySharedComponent from './components/MySharedComponent';

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                <Router>
                    <Scene key="root">
                        <Scene key="mySharedComponent" component={MySharedComponent} title="MySharedComponent" initial/>
                    </Scene>
                </Router>
                             {/* <Button
                    title="Press me"
                    onPress={() => { () => Actions.mySharedComponent() }}
                /> */}
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

export default Index;
