// So this code is defining HelloWorldApp, a new Component. When 
// you're building a React Native app, you'll be making new 
// components a lot. Anything you see on the screen is some sort of 
// component.

import React from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
  },
});

// Most components can be customized when they are created, with different 
// parameters. These creation parameters are called props.
// We creating a prop component called name.

const Greeting = (props) => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
};

// Your own components can also use props. This lets you make a single 
// component that is used in many different places in your app, with 
// slightly different properties in each place. Refer to 
// props.YOUR_PROP_NAME in your functional components or 
// this.props.YOUR_PROP_NAME in your class components.

const LotsOfGreetings = () => {
  return (
    <View style={[styles.center, { top: 50 }]}>
      <Greeting name="Rexxar" />
      <Greeting name="Jaina" />
      <Greeting name="Valeera" />
    </View>
  );
};

export default LotsOfGreetings;
