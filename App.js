import React from 'react';
import { StyleSheet, Image, Text, View, Button, Alert, TouchableOpacity} from 'react-native';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
        randomColor: null
      }
    }
  
  getRandomColor = () => {
    return(
      "rgb(" + 
      Math.floor((Math.random()* 256)) + ", " + 
      Math.floor((Math.random()* 256)) + ", " + 
      Math.floor((Math.random()* 256)) + ") "
    )
  }

  myButtonPressed = () =>{
    this.setState({randomColor: this.getRandomColor()})
  }
  render (){
  return (
    <View style={[styles.container, {backgroundColor : this.state.randomColor}]}>
      <TouchableOpacity 
      onPress = {this.myButtonPressed}>
     
      <Text style = {styles.text}> Login</Text>
      </TouchableOpacity>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize : 30,
    backgroundColor: "#C1C1C1",
    paddingVertical : 12,
    paddingHorizontal : 40,
    borderRadius : 12,
    color: "#ffffff",
    borderColor: "#FFFFFF",
    borderWidth: 2
  }
});
