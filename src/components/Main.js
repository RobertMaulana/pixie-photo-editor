import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ScrollableTabView, { DefaultTabBar } from "react-native-scrollable-tab-view";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Gallery from "./Gallery";
import About from "./About";

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <ScrollableTabView
        renderTabBar={() => <DefaultTabBar />}
      >
        <TouchableOpacity tabLabel="Gallery">
          <Gallery />
        </TouchableOpacity>
        <Text tabLabel="Photo"> My Text 2</Text>
        <TouchableOpacity tabLabel="About">
          <About />
        </TouchableOpacity>
      </ScrollableTabView>
    )
  }
}

export default Main;
