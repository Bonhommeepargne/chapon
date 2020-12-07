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
      btnTitle: "Next exo", // Dynamique titre next exo2 ou back
    };
  }

  nextPage() {
    if (Actions.currentScene == "main" ) return
    if (Actions.currentScene == "exo1" ) Actions.exo2();
    else Actions.reset('main');

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
        <Text> Affichage conditionel ( ne devrais pas apparetre dans main) Le titre devrais etre dynamique voir state</Text>
        <Button
          title={this.state.btnTitle}
          onPress={() => { this.nextPage() }}
        />

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
