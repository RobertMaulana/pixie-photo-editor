import React, { Component } from "react";
import {
  CameraRoll,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  View,
  Text,
  Button,
  Dimensions
} from "react-native";

let {height, width} = Dimensions.get('window');

class Gallery extends Component {
  constructor (props){
    super(props);
    this.state = {
      photos: [],
      editor: false,
      photo: ""
    }
  }

  componentWillMount(){
    CameraRoll.getPhotos({
      first: 100,
      assetType: "All"
    }).then(r => this.setState({photos: r.edges}))

  }
  editor(uriPicture){
    this.setState({editor: !this.state.editor})
    this.setState({photo: uriPicture})
  }

  render(){
    const { photos } = this.state;
    const { imageContainerStyle, imageStyle, imageEditorStyle, imageEditorContainerStyle, modalButtonStyle } = styles;

    return (
      <ScrollView>
      {(photos !== null) && (
        photos.map((dataPhoto) => {
          return (
            <TouchableOpacity key={dataPhoto.node.image.uri} onPress={() => this.editor(dataPhoto.node.image.uri)}>
              <Image
                resizeMode={Image.resizeMode.cover}
                style={imageStyle}
                source={{uri: dataPhoto.node.image.uri}}
              />
            </TouchableOpacity>
          )
        })
      )}
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.state.editor}
        onRequestClose={() => {alert("Modal has been closed!")}}
      >
        <View>
          <Image
            resizeMode={Image.resizeMode.cover}
            style={imageEditorStyle}
            source={{uri: this.state.photo}}
          />
          <Button
            onPress={() => this.setState({editor: false})}
            title="Cancel"
            color="#841584"
            style={modalButtonStyle}
          />
        </View>
      </Modal>
      </ScrollView>
    )
  }
}

const styles = {
  imageStyle: {
    flex: 1,
    width: 150,
    height: 150
  },
  imageEditorContainerStyle: {
    justifyContent: "center",
    alignItems: "center"
  },
  imageEditorStyle: {
    height: height - 100,
    width: 600
  },
  modalButtonStyle: {
    height: 100,
    fontSize: 40
  }
}


export default Gallery;
