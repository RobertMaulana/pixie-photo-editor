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
      first: 100,
      assetType: "All"
    }).then(r => this.setState({photos: r.edges}))

  }

  render(){
    const { photos } = this.state
    const { imageContainerStyle, imageStyle } = styles
    return (
      <ScrollView>
      {(photos !== null) && (
        photos.map((dataPhoto) => {
          return (
            <TouchableOpacity key={dataPhoto.node.image.uri}>
              <Image
                resizeMode={Image.resizeMode.cover}
                style={imageStyle}
                source={{uri: dataPhoto.node.image.uri}}
              />
            </TouchableOpacity>
          )
        })
      )}
      </ScrollView>
    )
  }
}

const styles = {
  imageStyle: {
    flex: 1,
    width: 150,
    height: 150
  }
}


export default Gallery;
