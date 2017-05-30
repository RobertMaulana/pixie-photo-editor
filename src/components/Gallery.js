import React, { Component } from "react";
import {
  View,
  Text,
  CameraRoll,
  ScrollView
} from "react-native";

class Gallery extends Component {
  constructor (props){
    super(props);
    this.state = {
      photos: []
    }
  }

  componentDidMount(){
    CameraRoll.getPhotos({
      first: 20,
      assetType: "All"
    }).then(r => this.setState({photos: r.edges}))

  }

  render(){
    return (
      <View>
        <ScrollView>
          
        </ScrollView>
      </View>
    )
  }
}


export default Gallery;
