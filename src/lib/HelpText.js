

'use strict';

import React from 'react';

import { View, StyleSheet, Text} from 'react-native';

export class HelpText extends React.Component{
  render(){
    if(!this.props.text) return null;
    return (
      <View style={this.props.helpTextStyles.helpTextContainer}>
        <Text style={this.props.helpTextStyles.helpText}>{this.props.text}</Text>
    </View>);
  }
}

HelpText.propTypes = {
  text: React.PropTypes.string
}


  let formStyles = StyleSheet.create({

    helpTextContainer:{
      marginTop:9,
      marginBottom: 25,
      paddingLeft: 20,
      paddingRight: 20,

    },
    helpText:{
      color: '#7a7a7a'
    }
  });
