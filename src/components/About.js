import React, { Component } from "react";
import { View, Text } from "react-native";

const About = () => {
  const { aboutContainerStyle, textStyle } = styles
  return (
    <View style={aboutContainerStyle}>
      <Text style={textStyle}>Pixie v0.1</Text>
      <Text style={textStyle}>Robert Maulana</Text>
    </View>
  )
}

const styles = {
  aboutContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50%"
  },
  textStyle: {
    fontSize: 30
  }
}

export default About;
