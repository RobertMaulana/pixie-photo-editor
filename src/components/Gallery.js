import React, { Component } from "react";
import {
  View,
  Text,
  CameraRoll,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";

class Gallery extends Component {
  constructor (props){
    super(props);
    this.state = {
      photos: []
    }
  }

  componentWillMount(){
    CameraRoll.getPhotos({
      first: 20,
      assetType: "All"
    }).then(r => this.setState({photos: r.edges}))

  }

  render(){
    const { photos } = this.state
    const { imageContainerStyle, imageFlexStyle, imageStyle } = styles
    return (
      <View style={imageContainerStyle}>
      {(photos !== null) && (
        photos.map((dataPhoto) => {
          return (
            <TouchableOpacity key={dataPhoto.node.image.uri} style={imageFlexStyle}>
              <Image style={imageStyle} source={{uri: dataPhoto.node.image.uri}} />
            </TouchableOpacity>
          )
        })
      )}
      </View>
    )
  }
}

const styles = {
  imageContainerStyle: {
    flexDirection: "row"
  },
  imageFlexStyle: {
    flex: 1
  },
  imageStyle: {
    height: 100,
    width: 100
  }
}


export default Gallery;
