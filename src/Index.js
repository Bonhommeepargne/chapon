import React, { Component } from "react";
import { StyleSheet, Button, Text, View, Image, Alert } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Main from "./components/Main";
import Exo1 from "./components/Exo1";
import Exo2 from "./components/exo2/Exo2";
import Exo3 from "./components/exo3/Exo3";
import Context from "./Context";


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnTitle: 'toto',
      compteur: {
        value: 0,
        change: this.changeCompteur
      }
    };
  }

  changeCompteur = (newValue) => {
    this.setState((oldState) => {
      const NewCompteur = oldState.compteur;
      NewCompteur.value = newValue;
      return { ...oldState, compteur: NewCompteur };
    });
  }

  nextPage = () => {
    switch (Actions.currentScene) {
      case 'exo1':
        console.log("Exo1");
        this.setState((OldState) => {
          return { btnTitle: 'Exo2' };
        });
        return Actions.exo2();
      case 'exo2':
        console.log("Exo2");
        this.setState((OldState) => {
          return { btnTitle: 'Exo3' };
        });
        return Actions.exo3();
      case 'exo2':
        console.log("Exo3");
        this.setState((OldState) => {
          return { btnTitle: 'Return to Main' };
        });
        return Actions.reset('main');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Context.Provider value={this.state}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Main" component={Main} />
              <Stack.Screen name="Exo1" component={Exo1} />
              <Stack.Screen name="Exo2" component={Exo2} />
              <Stack.Screen name="Exo3" component={Exo3} />
            </Stack.Navigator>
          </NavigationContainer>
          {this.state.btnTitle !== '' && this.state.btnTitle &&
            <>
              <Text> {this.state.btnTitle === '' ? 'Le titre du bouton est vide' : 'Le titre du bouton est ' + this.state.btnTitle}  </Text>
              <Button
                title={this.state.btnTitle}
                onPress={() => { this.nextPage() }}
              />
            </>
          }
        </Context.Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: "100%",
    height: "100%",
  },
  navigationBarTitleStyle: {
    flex: 1,
    textAlign: 'center'
  }
});

export default Index;
