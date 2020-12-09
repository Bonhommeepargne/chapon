import React, { Component } from "react";
import { StyleSheet, Button, Text, View, Image, Alert } from "react-native";
import { Router, Scene, Actions } from "react-native-router-flux";
import Main from "./components/Main";
import Exo1 from "./components/Exo1";
import Exo2 from "./components/exo2/Exo2";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnTitle: ''
    };
  }

  nextPage = () => {
    switch ( Actions.currentScene ) {
      case 'exo1':
        console.log("Exo1");
        this.setState((OldState) => {
          return { btnTitle : 'Exo2' };
        });
        return Actions.exo2();
      case 'exo2':
        console.log("Exo2");
        this.setState((OldState) => {
          return { btnTitle : 'Return to Main' };
        });
        return Actions.reset('main');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Router >
          <Scene key="root">
            <Scene key="main" component={Main} title="Main" titleStyle={styles.navigationBarTitleStyle} initial />
            <Scene key="exo1" component={Exo1} title="Exo1" />
            <Scene key="exo2" component={Exo2} title="Exo2" />
          </Scene>
        </Router>
        {this.state.btnTitle !== '' && this.state.btnTitle &&
        <>
          <Text> {this.state.btnTitle === '' ? 'Le titre du bouton est vide'  : 'Le titre du bouton est ' + this.state.btnTitle}  </Text>
          <Button
            title={ this.state.btnTitle }
            onPress={() => {this.nextPage()} }
          />
        </>
      }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  navigationBarTitleStyle: {
    flex: 1,
    textAlign: 'center'
  }
});

export default Index;
