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

export default class awesomeProject extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
        './html/one/index.html', './html/two/index.html'
      ]),
      textContent: 'hello world'
    };

    this._onPressButton = this._onPressButton.bind(this);
  }

  render() {
    return (

     <Nav />
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
