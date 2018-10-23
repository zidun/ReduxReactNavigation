import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text> Hellow Wa </Text>
      </View>
    );
  }
}

export default Index;
