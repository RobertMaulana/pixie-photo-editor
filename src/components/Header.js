import React, { Component } from "react";
import {
  View,
  Text
} from "react-native";

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    const { headerContainer, headerContent } = styles;
    return (
      <View style={headerContainer}>
        <Text style={headerContent}>Pixie</Text>
      </View>
    )
  }
}

const styles = {
  headerContainer: {
    padding: 20,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  headerContent: {
    fontSize: 20
  }
};

export default Header;
