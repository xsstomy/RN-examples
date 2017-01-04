/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  ListView,
  TouchableHighlight
} from 'react-native';

import Nav from './src/components/Nav';
import App from './src/index';
export default class awesomeProject extends Component {

  constructor(props) {
    super(props);
  
  }

  render() {
    return (

     <App />
    );
  }

  _onPressButton(data) {
    this.setState({ textContent: data });

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('awesomeProject', () => awesomeProject);
