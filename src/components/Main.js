import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ScrollableTabView, { DefaultTabBar } from "react-native-scrollable-tab-view";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Gallery from "./Gallery";

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
        <Text tabLabel="About"> My Text 3</Text>
      </ScrollableTabView>
    )
  }
}

export default Main;
