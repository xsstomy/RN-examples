import React, { Component, PropTypes } from 'react';
import { View, Text, Dimensions, StyleSheet, ListView, TouchableHighlight } from 'react-native';
import WebViewScene from './WebViewScene';
import { connect } from 'react-redux';

import {changeContent} from '../actions/Home.action';


const { width, height } = Dimensions.get('window');
class Home extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([{name: 'one1', htmlUrl: '../../html/one/index.html'}
                ,{name: 'two1', htmlUrl: '../../html/two/index.html'}
            ]),
            textContent: 'hello yitong'
        };

    }

    render() {
        return (<View style={{ flex: 1, paddingTop: 22 }}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <TouchableHighlight onPress={() => {
                    this.props.navigator.push({
                        component: WebViewScene,
                        htmlUrl: rowData.htmlUrl,
                        name: 'WebViewScene'
                    });
                } }>
                    <Text style={{flex:2 ,padding: 10}}>{rowData.name}</Text>
                </TouchableHighlight>}
                />
            <Text>{this.state.textContent}</Text>
            <TouchableHighlight onPress={() => {
                this.props.dispatch(changeContent(++this.props.homeState));
            }}>
                <Text>{this.props.homeState}</Text>
            </TouchableHighlight>

        </View>
        )
    }
}

function mapStateToProps(state) {
  const { homeState } = state;
  return {
        homeState
  }
}

export default connect(mapStateToProps)(Home);
